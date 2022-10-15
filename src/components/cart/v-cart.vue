<template>

  <div v-if="!this.GET_CART.length" class="container mt-5 pt-5">
    <h1 class="h1">Корзина пустая. Попробуйте добавить в нее что-нибудь.</h1>
  </div>

  <div v-else class="container">

    <div class="cart">
      <h1 class="h2 py-3">Выбранные товары</h1>
      <transition-group tag="ul" name="cart">
        <v-cart-item
            v-for="item in GET_CART" :key="item.id"
            v-bind:item="item"
            v-bind:DOMAIN="this.GET_DOMAIN"
            v-bind:PORT="this.GET_PORT"
            @removeItem="removeItem"
        />
      </transition-group>
    </div>

    <v-cart-recommended v-if="GET_RELATED_PRODUCTS.length"
                        v-bind:relatedItems="GET_RELATED_PRODUCTS"
                        v-bind:domain="GET_DOMAIN"
                        @addItemToCart="addItemToCart"
    />


    <div class="d-flex flex-column align-items-end pb-5">
      <h3 class="h5">Итого: {{ GET_TOTAL_COUNT }} &#8381; </h3>
      <button class="btn btn-success" data-bs-toggle="modal" :data-bs-target="slotProps ? '#'+slotProps.target : '#modalWindow'" >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import VCartItem from "./v-cart-item";
import VCartRecommended from "./v-cart-recommended";
import VCartRecommendedProduct from "./v-cart-recommended-product";

export default {
  name: "v-cart",
  components: {VCartRecommendedProduct, VCartRecommended, VCartItem},
  computed: mapGetters(["GET_CART", "GET_OBJECT_CART", "GET_CART_PRODUCT_COUNT", "GET_RELATED_PRODUCTS",
    "GET_PRODUCTS", "GET_ALL_PRODUCTS_ARRAY", "GET_DOMAIN", "GET_PORT", "GET_BUILD_ORDER_CART", "GET_TOTAL_COUNT"]),
  methods: {
    ...mapActions(["FETCH_DELETE_ITEMS_FROM_CART", "FETCH_ADD_TO_CART"]),
    ...mapMutations(["UPDATE_IS_FETCHING", "UPDATE_TOTAL_COUNT"]),
    async removeItem(id){
      this.cartItems = this.cartItems.filter(el => el.id !== id);
      await this.FETCH_DELETE_ITEMS_FROM_CART(id);
    },
    async addItemToCart(id, quantity = 1){
      await this.FETCH_ADD_TO_CART({ id, quantity});
    },
  },
  props: {
    slotProps: {
      type: Object
    }
  },
  data(){
    return{
      cartItems : [],
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.cart{
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 20px;

  &__title{
    font-size: 2rem;
    font-weight: 700;
    padding: 20px 0;
  }
}

/* animation styling */
ul{
  position: relative;
  padding: 0;
}
.cart-enter-from,
.cart-leave-to{
  opacity: 0;
  transform: scale(1);
}
.cart-leave-active{
  transition: all 0.3s ease;
  position: absolute;
}
.cart-enter-active{
  transition: all 0.3s ease;
}
.cart-move{
  transition: all 0.4s ease;
}
</style>