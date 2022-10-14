<template>
  <div v-if="!orders_history" class="mt-5 pt-5">
    <h1 class="display-4 text-center">История заказов не найдена. </h1>
  </div>
  <div v-else class="mt-5 pt-5">
    <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between col-12  col-xl-10 container order"
         v-for="order in orders_history" :key="order.id" @click="openOrderInfoModal(order.id)" >
      <div class="text-center">
        Заказ #{{ order.pin}} от {{ getOrderDate(order.created) }} - {{ settings.order_statuses[order.status].name.toLowerCase()}}
      </div>
      <div class="text-center">
        сумма заказа - {{ order.payment.amount_left }} &#8381; - {{ settings.payment_statuses[order.payment.payment_status].name.toLowerCase() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-order-history",
  methods: {
    getOrderDate(date){
      let dateInst = new Date(date)
      return `${dateInst.getDate()}.${dateInst.getMonth() + 1}.${dateInst.getFullYear()}`;
    },
    openOrderInfoModal(id){
      this.$emit('openOrderInfoModal', id)
    },

  },
  props: {
    orders_history: {
      Object,
      default() {
        return {};
      }
    },
    settings: {
      Object,
      default() {
        return {};
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.order{
  cursor: pointer;
  padding: 10px;
  &:nth-child(2n){
    background-color: #f5f5f5;
  }
  @media screen and (min-width: 992px) {
    transition: background-color 0.25s ease;
    &:hover{
      background-color: #e0e0e0;
    }
  }

}
</style>