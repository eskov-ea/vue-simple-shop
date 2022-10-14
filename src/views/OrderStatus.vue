<template>
  <v-order-status />
</template>

<script>
import VOrderProcess from "../components/order/v-order-process";
import VOrderStatus from "../components/order/v-order-status";
export default {
  name: "OrderProcess",
  components: {VOrderStatus, VOrderProcess}
}
</script>

<style scoped>

</style>