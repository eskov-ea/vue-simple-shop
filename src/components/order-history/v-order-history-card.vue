<template>
  <div v-if="order">
    <div class=" mt-5 ">
      <h1 class="h3">Информация о заказе # {{order.pin }}</h1>
      <h2 class="h6 mt-5 mb-2">Статус заказа: {{ settings.order_statuses[order.status].name}}</h2>
      <p>Заказ оформлен: {{ getOrderDate() }}</p>
      <div class="d-flex flex-lg-row flex-column col-12 justify-content-between">
        <div class="d-flex flex-column my-4 pe-5">
          <h6>Информация о доставке</h6>
          <p class="mt-2">Тип доставки: {{ settings.delivery_types[order.delivery.delivery_type].name}}</p>
          <p> Статус доставки: {{ settings.delivery_statuses[[[order.delivery.delivery_status]]].name}}</p>
          <p class="d-flex flex-wrap ">Адресс: {{ order.delivery.address || 'Самовывоз '}} </p>
          <p>Время доставки: {{ order.delivery.delivery_time || 'Ближайшее'}} </p>
          <p>Стоимость доставки: {{ order.delivery.delivery_price}} &#8381;</p>
        </div>
        <div class="d-flex flex-column my-4">
          <h6>Информация об оплате</h6>
          <p> Способ оплаты: {{ settings.payment_systems[order.payment.payment_system].name }} </p>
          <p> Статус оплаты: {{ settings.payment_statuses[order.payment.payment_status].name }} </p>
          <p> Оплачено: {{ order.payment.amount }} &#8381;</p>
        </div>
        <div v-if="order.comment" class="d-flex flex-column my-4">
          <h6>Комментарий к заказу</h6>
          <p> {{ order.comment }}</p>
        </div>

        <div class="d-flex flex-column my-4">
          <h6>Товары</h6>
          <div v-for="orderItem in order.products" class="d-flex flex-column">
            <div class="d-flex my-1">
              <p class="my-0 py-0 pe-3"> {{ orderItem.product_name}} </p>
              <p class="my-0 py-0 pe-3"> {{ orderItem.product_price}} &#8381;</p>
              <p class="my-0 py-0 pe-3"> x {{ orderItem.amount}}</p>
            </div>
          </div>
          <hr>
          <p class="h6"> К оплате: {{ order.payment.amount_left }} &#8381;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-order-history-card",
  methods: {
    getOrderDate(){
      let date = new Date(this.order.created)
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
  },
  props: {
    settings: {
      type: Object,
      default(){
        return {};
      }
    },
    order: {
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>