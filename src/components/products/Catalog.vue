<template>
  <div class="pb-5  ">
    <ul class="d-flex p-0 product-navigation">
      <li class="mt-2" v-for="catalog in GET_PRODUCTS" :key="catalog.id">
        <a class="pe-4" :href="'#' + catalog.id">{{catalog.name}}</a>
      </li>
    </ul>


    <div
        v-for="catalog in GET_PRODUCTS" :key="catalog.id"
    >
      <h1 :id="catalog.id" class="h1 mb-4">{{catalog.name}}</h1>
      <div class="row mb-5">
        <ProductItem class=""
            v-for="product in catalog.products"
            :key="product.id"
            v-bind:product_data="product"
            v-bind:DOMAIN="GET_DOMAIN"
            v-bind:PORT="GET_PORT"
            v-bind:amount="GET_OBJECT_CART[product.id]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ProductItem from "./v-product-item";

export default {
  name: "Catalog",
  components: {ProductItem},
  computed: mapGetters(["GET_PRODUCTS", "GET_DOMAIN", "GET_PORT", "GET_OBJECT_CART"]),
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
[id] {
  scroll-margin-top: 100px;
}
.product-navigation{
  @media screen and(max-width: 992px){
    overflow-x: scroll;
  }
}
ul{
  position: sticky;
  z-index: 1000;
  background-color: white;
  list-style-type: none;
  top: 58px;
  display: flex;
  flex-wrap: nowrap;
  @media screen and(min-width: 992px){
    margin-left: -20px;
    width: 103%;
  }
  div{
    position: absolute;
    width: 100%;
  }
  li:first-child{
    padding-left: 20px;
  }
  li{
    padding: 10px 0;
    white-space: nowrap;
  }
  a{
    text-decoration: none;
    color: #000;
  }
}
</style>