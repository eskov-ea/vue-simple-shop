<template>
  <div class="container pt-5">
      <div v-if="pin">
        <div class="pt-5 mb-5 d-flex justify-content-center">
          <h1 class="display-4">Заказ #{{ pin }}</h1>
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <p class="h5">Состояние заказа: В работе</p>
        </div>
      </div>
      <div v-else>
        <p class="text-center display-6 mt-5 pt-5">Вы не оформили заказ. Вернитесь в меню и выберите товар!</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "v-order-status",
  props: {
    pin: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>