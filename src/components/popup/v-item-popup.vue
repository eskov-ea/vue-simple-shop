<template>
  <transition name="item-popup">
    <div class="v-popup_wrapper">
      <div class="v-popup">
        <span class="close" @click="closePopup"><i class="close-icon bi bi-x-square-fill"></i></span>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-7">
              <img class="card-img-top p-md-4 pt-2 pt-md-0 pt-md-4 " :src="getImageUrl()" alt="">
            </div>
            <div class="col-12 col-md-5 py-4 px-md-4 py-md-4">
              <h2 class="h2 mb-3 md-mb-5"> {{ product_data.name }} </h2>
              <p class="mb-1 md-mb-4"> {{ product_data.description }} </p>
              <p class="mb-2 md-mb-4"> {{ product_data.ingredients }}</p>

              <p class="h5 mb-2">
                {{ product_data.ccal == 0 && product_data.protein == 0 && product_data.fat == 0 && product_data.sugar == 0 
                  ? "" : "Пищевая ценность в 100 гр.:"}}
              </p>
              <p class="mb-0"> {{ product_data.ccal == 0 ? "" : 'Ккал: ' + product_data.ccal }}</p>
              <p class="mb-0"> {{ product_data.protein == 0 ? "" : 'белки: ' + product_data.protein }}</p>
              <p class="mb-0"> {{ product_data.fat == 0 ? "" : 'жиры: ' + product_data.fat }}</p>
              <p class="mb-0"> {{ product_data.sugar == 0 ? "" : 'сахар: ' + product_data.sugar }}</p>
            </div>
          </div>

          <div class="py-0 px-md-4 py-md-4 d-xs-flex justify-content-between align-items-end">
            <div class="d-flex justify-content-between">
              <p class="h4 m-0 amount">Выбрано: {{ amount }} </p>
              <p class="h4 m-0 amount">{{ product_data.price }}  ₽</p>
            </div>
            <div class="d-grid gap-2 d-flex justify-content-between justify-xs-content-end  mt-4 ">
              <div class="d-grid gap-2 d-flex align-items-end">
                <button @click="decreaseItemQuantity" class="btn btn-light control">-</button>
                <input v-model="this.quantity" class="control" type="number">
                <button @click="increaseItemQuantity" class="btn btn-light control">+</button>
              </div>

              <div class="cart">
                <button
                    class="btn btn-success"
                    @click="addToCart(product_data.id, this.quantity)"
                >
                  <i class="bi bi-cart px-2"></i>
                </button>
                <button
                    class="btn btn-danger ms-1"
                    @click="deleteItemsFromCart(product_data.id)"
                >
                  <i class="bi bi-trash px-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
// import VItemPopupControls from "../trush/v-item-popup-controls";
import {unlockBodyScroll} from "../functions/bodyScroll";

export default {
  name: "v-item-popup",
  // components: {VItemPopupControls},
  computed: mapGetters(["GET_DOMAIN", "GET_PORT"]),
  props:{
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
    amount: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods:{
    ...mapActions(["FETCH_ADD_TO_CART", "FETCH_DELETE_ITEMS_FROM_CART"]),
    ...mapMutations(["CLOSE_POPUP"]),
    closePopup(){
      this.CLOSE_POPUP();
      unlockBodyScroll();
    },
    getImageUrl(){
      console.log(this.product_data)
      return this.product_data.images
          ? this.GET_DOMAIN + ":" + this.GET_PORT + this.product_data.images[Object.keys(this.product_data.images)[0]].url
          : ''
    },
    addToCart(id, quantity = 1){
      this.FETCH_ADD_TO_CART({ id, quantity});
      this.quantity = 1;
      setTimeout(() => {
        this.CLOSE_POPUP();
        unlockBodyScroll();
      }, 500)
    },
    deleteItemsFromCart(id){
      this.FETCH_DELETE_ITEMS_FROM_CART(id);
    },
    increaseItemQuantity(){
      this.quantity++;
    },
    decreaseItemQuantity(){
      this.quantity > 1 ? this.quantity-- : this.quantity;
    },
  },
  data(){
    return{
      quantity: 1,
    }
  }
}
</script>

<style lang="scss" scoped>

.close{
  padding-right: 5px;
  display: inline-flex;
  position: absolute;
  right: 0;
  position: absolute;
  .close-icon{
    font-size: 2rem;
  }
  @media screen and(max-width: 768px){
    padding: 0 0 0 0;
    top: -5px;
    z-index: 99;
    .close-icon{
      font-size: 1.5rem;
    }
  }

}

.v-popup_wrapper{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1001;
  height: 100vh;
  width: 100vw;
}
.v-popup{
  position: fixed;
  margin-top: 40px;
  top: 50% ;
  left: 50%;
  width: 90vw;
  height: 90vh;
  max-width: 1100px;
  max-height: 500px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  z-index: 11;
  border-radius: 5px;
  @media screen and(max-width: 768px) {
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    top: 0px;
    margin-top: 10px;
    left: 0;
    transform: translate(0%, 0%);
  }
  @media screen and(max-width: 400px){
    padding-bottom: 50px;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.card-img-top{
  width: 100%;
  max-height: 360px;
  object-fit: contain;
}
.control{
  width: 30px;
  height: 38px;
  text-align: center;
}
.amount{
  line-height: 1rem;
}

.item-popup-enter-active,
.item-popup-leave-active{
  transition: opacity 0.4s ease;
}
.item-popup-enter-from,
.item-popup-leave-to{
  opacity: 0;
}
</style>