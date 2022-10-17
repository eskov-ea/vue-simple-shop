<template>

  <div class="item col-12 col-md-6 col-lg-4 col-xl-3 pb-2 d-flex">
    <div class="card w-100">
      <img
          :src="this.DOMAIN + ':' + this.PORT + product_data.images[Object.keys(product_data.images)[0]].url"
          alt="..."
          class="card-img-top"
          @click="openPopup(product_data)"
      >
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-1 d-flex"> {{ product_data.name }} </h5>
        <p class="card-text mb-2"> {{ product_data.description }} </p>
        <div>
          <span class="h5"> {{ product_data.price }} &#8381;</span>
          <span>/{{ product_data.weight>0 ? product_data.weight + ' гр.' : product_data.volume + ' мл.'}} </span>
        </div>

        <div class="d-grid gap-2 d-flex justify-content-end mt-4 me-2">
          <div class="d-grid gap-2 d-flex align-items-end">
            <button @click="decreaseItemQuantity" class="btn btn-light control">-</button>
            <input v-model="this.quantity" class="control" type="number">
            <button @click="increaseItemQuantity" class="btn btn-light control">+</button>
          </div>
          <div class="cart position-relative">
            <div class="position-relative d-inline">
              <span
                class="position-absolute bottom-0  start-100 translate-middle badge rounded-pill bg-warning"
                :class="{'visually-hidden' : !this.amount}"
            >
              {{this.amount}}
            </span>
              <button
                class="btn btn-success px-1"
                @click="addToCart(product_data.id, this.quantity)"
            >
              <i class="bi bi-cart px-2"></i>
            </button>
            </div>
            <button
                class="btn btn-danger ms-3 px-1"
                @click="deleteItemsFromCart(product_data.id)"
            >
              <i class="bi bi-trash px-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VAddToCart from "../parts/v-add-to-cart";
import {mapActions, mapGetters, mapMutations} from "vuex";
import VItemControls from "./v-item-controls";
import {lockBodyScroll, unlockBodyScroll} from "../functions/bodyScroll";
import {openModal} from "../functions/modalControls";
export default {
  name: "Product",
  components: {VItemControls, VAddToCart},
  computed: mapGetters(["GET_POPUP_CONDITION"]),
  methods: {
    ...mapActions(["FETCH_ADD_TO_CART", "FETCH_DELETE_ITEMS_FROM_CART"]),
    ...mapMutations(["OPEN_POPUP"]),
    addToCart(id, quantity = 1) {
      this.FETCH_ADD_TO_CART({id, quantity});
      this.quantity = 1;
      // this.isProductAdded = true;
    },
    deleteItemsFromCart(id) {
      this.FETCH_DELETE_ITEMS_FROM_CART(id);
      // this.isProductAdded = false;
    },
    increaseItemQuantity() {
      this.quantity++;
    },
    decreaseItemQuantity() {
      this.quantity > 1 ? this.quantity-- : this.quantity;
    },
    openPopup() {
      let itemData = this.product_data;
      console.log(itemData)
      let itemAmount = this.amount;
      this.OPEN_POPUP({itemData, itemAmount});
      lockBodyScroll();
    }
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
    product_quality: {
      type: Number,
      default() {
        return 0
      }
    },
    DOMAIN: {
      type: String
    },
    PORT: {
      type: String
    },
    amount: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  data(){
    return{
      selected_amount: 0,
      quantity: 1
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.item{
  transition: transform 0.35s ease;
  @media screen and (min-width: 992px) {
    &:hover{
      transform: scale(1.05);
    }
  }
}
.control{
  width: 30px;
  height: 38px;
  text-align: center;
}
.badge{
  padding: 10px;
  width: 2rem;
  height: 2rem;
}
.card-img-top{
  max-height: 200px;
  height: 200px;
  object-fit: cover;
  @media screen and (min-width: 992px) {
    &:hover{
      cursor: pointer;
    }
  }
}
.card-title{
  flex: 1 1 auto;
}
.btn{
  font-size: 0.9rem;
}
</style>


