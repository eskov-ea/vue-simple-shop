<template>

  <div v-if="!GET_ORDER_INFO[1] ">
    <h1 class="display-4 mt-5 pt-5 text-center">Введите номер заказа, выбрав в меню пункт "Статус заказа"</h1>
  </div>

  <div v-else>
    <div>
      <v-order-history
          v-bind:orders_history="GET_ORDER_INFO"
          v-bind:settings="GET_ORDER_SETTINGS"
          @openOrderInfoModal="openOrderInfoModal"
      />
    </div>
    <Modal :data="this.slotProps">
      <template #data="slotProps">
        <v-order-history-card :order="GET_ORDER_INFO['1']" :settings="GET_ORDER_SETTINGS" />
      </template>
    </Modal>
  </div>

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import VOrderHistoryCard from "../components/order-history/v-order-history-card";
import VLoader from "../components/parts/v-loader";
import VOrderHistory from "../components/order-history/v-order-history";
import Modal from "../components/parts/Modal";
import {openModal} from "../components/functions/modalControls";

export default {
  name: "v-orders-history",
  components: {Modal, VOrderHistory, VLoader, VOrderHistoryCard},
  computed: mapGetters(["GET_ORDER_INFO", "GET_ORDER_SETTINGS"]),
  methods: {
    ...mapActions(["REQUEST_UPDATE_ORDER_INFORMATION"]),
    ...mapMutations([]),
    openOrderInfoModal(){
      openModal('orderInfoByPinModal');
    },
    updateOrderData(){
      this.intervalId = setInterval( () => {
        if( Object.keys(this.GET_ORDER_INFO).length !== 0) {
          this.REQUEST_UPDATE_ORDER_INFORMATION(this.GET_ORDER_INFO[1].pin)
        }
      }, 2000)
    }
  },
  data(){
    return{
      slotProps: {
        class: 'modal-xl',
        target: 'orderInfoByPinModal',
      },
      intervalId: null
    }
  },
  async mounted() {
    this.updateOrderData();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
}
</script>

<style lang="scss" scoped>

</style>