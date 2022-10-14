<!--<template>-->
<!--  <div :class="'controls_wrapper'">-->
<!--    <div :class="'controls'">-->
<!--      <div :class="'controls__input'">-->
<!--        <span for="quantity">Выбрано:</span>-->
<!--        <div-->
<!--            :class="-->
<!--             this.product_quality ? 'quantity_field positive' : 'quantity_field'-->
<!--            "-->
<!--        >-->
<!--          {{ product_quality }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <button-->
<!--          :class="'controls__increase btn'"-->
<!--          @click="increaseCartQuantity(product_data.id)"-->
<!--      >-->
<!--        +-->
<!--      </button>-->
<!--      <button-->
<!--          :class="'controls__decrease btn'"-->
<!--          @click="decreaseCartQuantity(product_data.id)"-->
<!--      >-->
<!--        - -->
<!--      </button>-->
<!--    </div>-->


<!--    <div class="controls-2">-->
<!--      <span>Введите количество:</span>-->
<!--      <div class="controls-2__conteiner">-->
<!--        <button class="increase btn" @click="increase_item_quantity">+</button>-->
<!--        <div>-->
<!--          <input type="number" v-model="this.item_quantity" >-->
<!--        </div>-->
<!--        <button class="decrease btn" @click="decrease_item_quantity">-</button>-->

<!--      </div>-->
<!--      <button class="add_btn" @click="addToCart2(product_data.id)">Добавить в корзину</button>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "v-add-to-cart",-->
<!--  methods:{-->
<!--    increase_item_quantity(){-->
<!--      this.item_quantity++;-->
<!--    },-->
<!--    decrease_item_quantity(){-->
<!--      this.item_quantity > 1 ? this.item_quantity&#45;&#45; : this.item_quantity;-->
<!--    },-->
<!--    addToCart2(id){-->
<!--      this.$emit('addToCart2', id, this.item_quantity);-->
<!--      this.item_quantity = 1;-->
<!--    },-->
<!--    increaseCartQuantity(id){-->
<!--      this.$emit('increaseCartQuantity', id);-->
<!--    },-->
<!--    decreaseCartQuantity(id){-->
<!--      this.$emit('decreaseCartQuantity', id);-->
<!--    }-->
<!--  },-->
<!--  data(){-->
<!--    return{-->
<!--      item_quantity: 1-->
<!--    }-->
<!--  },-->
<!--  props: {-->
<!--    product_data: {-->
<!--      type: Object,-->
<!--      default() {-->
<!--        return {}-->
<!--      }-->
<!--    },-->
<!--    product_quality: {-->
<!--      type: Number,-->
<!--      default() {-->
<!--        return 0-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.controls_wrapper{-->
<!--  width: 100%;-->
<!--}-->
<!--.controls{-->
<!--  display: flex;-->
<!--  margin: 10px 0;-->
<!--  align-items: flex-end;-->
<!--  width: 100%;-->
<!--.btn{-->
<!--  width: 25%;-->
<!--  height: 40px;-->
<!--  background-color: #d7d7d7;-->
<!--  border: 1px solid #000;-->
<!--  border-radius: 5px;-->
<!--}-->
<!--&__input {-->
<!--   width: 50%;-->
<!-- }-->
<!--&__input .quantity_field{-->
<!--   border: 1px solid #000000;-->
<!--   border-radius: 6px;-->
<!--   height: 40px;-->
<!--   width: 100%;-->
<!--   margin: 5px 0 0 0;-->
<!-- }-->
<!--.positive{-->
<!--  background-color: #f5ee68;-->
<!--}-->
<!--}-->
<!--.controls__add_btn {-->
<!--  background-color: #42b983;-->
<!--  padding: 10px;-->
<!--  color: #fff;-->
<!--  font-weight: 500;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s ease 0s;-->
<!--  width: 100%;-->
<!--&:hover{-->
<!--   background-color: #22764e;-->
<!-- }-->
<!--}-->
<!--.active{-->
<!--  background-color: #6e6e6e;-->
<!--&:hover{-->
<!--   background-color: #758675;-->
<!-- }-->
<!--}-->

<!--.controls-2{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--span{-->
<!--  margin: 5px 0;-->
<!--  text-align: left;-->
<!--}-->
<!--&__conteiner{-->
<!--   display: flex;-->
<!-- }-->

<!--.btn{-->
<!--  width: 25%;-->
<!--  height: 40px;-->
<!--  background-color: #d7d7d7;-->
<!--  border: 1px solid #000;-->
<!--  border-radius: 5px;-->
<!--}-->
<!--input{-->
<!--  border: 1px solid #000000;-->
<!--  border-radius: 6px;-->
<!--  height: 40px;-->
<!--  margin: 0;-->
<!--  width: 90%;-->
<!--}-->
<!--.add_btn{-->
<!--  margin-top: 5px;-->
<!--  background-color: #42b983;-->
<!--  padding: 10px;-->
<!--  color: #fff;-->
<!--  font-weight: 500;-->
<!--  border-radius: 5px;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s ease 0s;-->
<!--  width: 100%;-->
<!--}-->
<!--}-->
<!--</style>-->