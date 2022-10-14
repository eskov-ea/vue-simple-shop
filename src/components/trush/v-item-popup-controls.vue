<template>
  <div :class="'product_info__group'">
    <div :class="'product_info__controls controls'">
      <div class="controls__added"
           :class="{'item_in_cart' : this.amount}"
      >
        <div class="amount_wrapper"        >
          <span class="amount_text">Выбрано:</span>
          <span class="amount">
            {{this.amount}}
          </span>
        </div>
        <div class="delete_icon" >
          <img
              src="@/assets/icons/delete-icon-sm.png" alt=""
              @click="deleteItemsFromCart(this.id)"
          >
        </div>
      </div>
      <div class="controls__wrapper">
        <div class="controls__btns">
          <button @click="decreaseItemQuantity">-</button>
          <input
              type="number"
              class="controls__selected"
              v-model="this.quantity"
          >
          <button @click="increaseItemQuantity">+</button>
        </div>
        <button
            class="product_info__add_btn"
            @click="addToCart(this.id, this.quantity)"
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-item-controls",
  methods:{
    increaseItemQuantity(){
      this.quantity++;
    },
    decreaseItemQuantity(){
      this.quantity > 1 ? this.quantity-- : this.quantity;
    },
    addToCart(id) {
      this.$emit('addToCart', id, this.quantity);
      this.quantity = 1;
    },
    deleteItemsFromCart(id){
      this.$emit('deleteItemsFromCart', id);
    }
  },
  data(){
    return{
      quantity: 1
    }
  },
  props: {
    id: {
      type: Number
    },
    amount: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.product_info {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  &__group{
    width: 100%;
  }
  &__add_btn{
    width: 100%;
    max-width: 200px;
    justify-self: end;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid #42b983;
    color: #42b983;
    font-size: 0.875rem;
    padding: 4px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    transition: color 0.3s ease, transform 0.9s, background-color 0.3s ;
    @media screen and (min-width: 768px){
      &:hover{
        background-color: #42b983;
        color: #fff;
        transform: scale(1.05);
      }
    }
  }
}
.controls{
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 10px;
  &__added{
    font-size: 1rem;
    font-weight: 300;
    height: 40px;
    display: flex;
    opacity: 0.2;
    .amount_wrapper{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 0 0 0;
      align-items: flex-start;
      margin-top: -5px;
      padding-right: 20px;
    }
    .amount{
      font-size: 1.5rem;
      font-weight: 400;
      padding: 0 15px;
    }
  }
  &__wrapper{
    display: grid;
    grid-template-columns: 100px 200px;
    column-gap: 5px;
    justify-items: end;
    justify-content: end;
  }
  &__btns{
    display: grid;
    grid-template-columns: repeat(3, 40px);
    column-gap: 2px;
    height: 40px;
    font-size: 1.5rem;
    //@media screen and (min-width: 992px) {
    //  grid-template-columns: repeat(3, 20px);
    //}
    button{
      background-color: white;
      border: 1px solid rgba(0, 0, 0, .5);
      border-radius: 5px;
    }
  }
  &__selected{
    display: inline-flex;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .5);
    text-align: center;
  }
}
.item_in_cart{
  opacity: 1;
}
.delete_icon{
  width: 40px;
  display: flex;
  align-items: flex-end;
  img{
    width: 100%;
  }
}
</style>