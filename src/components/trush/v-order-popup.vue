<template>
  <div class="order_wrapper">
    <div class="order">
      <h1 class="order__title">Оформление заказа</h1>
      <div class="order__container">
        <div class="order__client_info info">

          <div class="info__controller">
            <label> Введите телефон
              <input type="tel" id="phone">
            </label>
          </div>
          <div class="info__controller">
            <label > Введите e-mail
              <input type="tel" id="email">
            </label>
          </div>
          <div class="info__controller">
            <label > Ваше имя
              <input type="tel" id="name">
            </label>
          </div>

        </div>

        <div class="order__cart_info cart">
          <div class="cart__goods"
               v-for="item in GET_ORDERS_CART" :key="item.id"
          >
<!--            <p>{{GET_ORDERS_CART}}</p>-->
              <p>{{item[0].title}}</p>
              <p>{{item.quantity}}</p>
          </div>
          <div class="cart__totalPrice"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import VInputController from "../Parts/v-input-controller";
import {mapGetters} from "vuex";
export default {
  name: "v-order-popup",
  components: {VInputController},
  computed: mapGetters(["GET_ORDERS_CART"])
}
</script>

<style lang="scss" scoped>
label{
  width: 100%;
  text-align: left;
}
input{
  width: 100%;
  height: 50px;
  font-size: 18px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #000;
  border-radius: 8px;
}
.order_wrapper{
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 90;
}
.order{
  display: flex;
  flex-direction: column;
  justify-content: center;
  //width: 60%;
  //height: 60%;
  width: 700px;
  height: 500px;
  background-color: #ffffff;

  &__container{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  &__client_info{
    width: 40%;
  }
}
.info{
  &__controller{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
  }
}
.cart{
  width: 60%;
  &__goods{
    width: 100%;
    height: 100%;
    background-color: #f5ee68;
    overflow: scroll;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>