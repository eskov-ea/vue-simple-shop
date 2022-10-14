<template>
    <div :class="'category _container'">
      <div :class="'category__title'"></div>
      <div :class="'category__container'">
        <ProductItem
          v-for="product in GET_PRODUCTS"
          :key="product.id"
          v-bind:product_data="product"
          @addToCart="addToCart"
        />
      </div>
    </div>
</template>

<script>
import ProductItem from "./v-product-item";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CategoryContainer",
  components: {ProductItem},
  computed: mapGetters(["GET_PRODUCTS"]),
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "FETCH_ADD_TO_CART"]),
    addToCart(product){
      this.FETCH_ADD_TO_CART(product);
    }
  },
  mounted() {
    this.FETCH_PRODUCTS();
  }
}
</script>

<style lang="scss" scoped>
.category{
  &__container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px 12px;
    @media (min-width: $md1+px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: $md2+px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $md3+px){
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }
  &__title{}
}

</style>