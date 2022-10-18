<template>
  <div :class="'item'">
    <v-item-popup
        v-if="isPopupOpened"
    />
    <div :class="'item__img'">
      <img
          :class="'item_img'"
          :src="product_data.image"
          @click="openPopup"
      >
    </div> 
    <div :class="'item__body product_info'">
      <div :class="'product_info__title'"> {{ product_data.title }} </div>
      <div :class="'product_info__description'"> {{ product_data.description }} </div>
      <div :class="'product_info__group'">
        <div :class="'product_info__group_price'"> {{ product_data.price }} </div>
        <button
            :class="'product_info__group_btn'"
            @click="addToCart"
        >
          В корзину
        </button>
      </div>
    </div>



  </div>
</template>

<script>
import VItemPopup from "./popup/v-item-popup";
export default {
  name: "ProductItem",
  components: {
    VItemPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isPopupOpened: false,
    }
  },
  methods: {
    openPopup(){
      console.log('cklick')
      this.isPopupOpened = true;
    },
    addToCart(){
      this.$emit('addToCart', this.product_data)
    },
  }
}
</script>

<style lang="scss" scoped>
.item{
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease 0s;
  @media (min-width: $md2+px) {
    &:hover{
      transform: scale(1.035);
      transition: transform 0.3s ease 0s;
    }

  }

  &__img{
   }
  &__img img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
.product_info{
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;
  &__title{
    font-size: 20px;
    letter-spacing: 0px;
    font-weight: 500;
    margin: 10px 0;
  }
  &__description{
    text-align: initial;
    flex: 1 1 auto;
  }
  &__group{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
    align-items: center;
    &_price{
      font-size: 20px;
      font-weight: 700;
    }
    &_btn{
      background-color: #42b983;
      padding: 10px;
      color: #fff;
      font-weight: 500;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover{
        background-color: #22764e;
      }
    }
  }
}
</style>