<template>

  <li class="row mb-4">
    <div class="col-md-4">
      <div class="card w-100">
        <img class="card-img-top" :src="this.DOMAIN + ':' + this.PORT + item.images[Object.keys(item.images)[0]].url" alt="">
      </div>
    </div>   
    <div class="col-md-8 d-flex flex-column">

      <div class="d-flex flex-column align-items-start">
        <h2 class="h3"> {{ item.name }} </h2>
        <!-- <p class=""> {{ item.description }}</p> -->
      </div>
      <div class="d-flex flex-row   align-items-end justify-content-between  h-100">
        <div>
          <h2 class="h3 p-0 m-0"> {{ item.price }} &#8381; </h2>
        </div>
        <div class="d-grid gap-2 d-flex justify-content-end flex-column flex-sm-row">
          <div class="d-grid gap-2 d-flex align-items-end">
            <button @click="decreaseItemAmount(item.id)" class="btn btn-light control">-</button>
            <div class="input d-flex justify-content-center align-items-center h4 mb-0" >
              {{ GET_OBJECT_CART[item.id] }}
            </div>
            <button @click="increaseItemAmount(item.id)" class="btn btn-light control">+</button>
          </div>
          <div class="cart position-relative">
            <button
                class="btn btn-danger"
                @click="deleteItemsFromCart(item.id)"
            >
              Удалить
              <i class="bi bi-cart ps-2"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </li>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-cart-item",
  computed: mapGetters(["GET_OBJECT_CART"]),
  methods: {
    ...mapActions(["FETCH_ADD_TO_CART", "FETCH_DECREASE_CART_ITEM_AMOUNT", "FETCH_DELETE_ITEMS_FROM_CART"]),
    async deleteItemsFromCart(id){
      this.$emit('removeItem', id);
    },
    async increaseItemAmount(id){
      let quantity = 1;
      await this.FETCH_ADD_TO_CART({ id, quantity});
    },
    async decreaseItemAmount(id){
      await this.FETCH_DECREASE_CART_ITEM_AMOUNT(id);
    },
  },
  props: {
    item: {
      type: Object,
      default(){
        return {};
      }
    },
    DOMAIN: {
      type: String,
      default() {
        return '';
      }
    },
    PORT: {
      type: String
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.card-img-top{
  max-height: 200px;
  height: 150px;
  object-fit: cover;
  @media screen and (min-width: 992px) {
    &:hover{
      cursor: pointer;
    }
  }
}
.input{
  width: 40px;
  height: 38px;
}
</style>
