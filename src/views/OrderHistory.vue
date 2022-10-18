<template>

  <div>
    <div v-if="isFetching">
      <v-loader />
    </div>

    <div v-else>
      <div v-if="Object.keys(GET_ORDERS_HISTORY).length === 0">
        <br><br><br><br><br><br>
	<center><h5>Вы еще не сделали ни одного заказа.</h5></center>
      </div>
      <div v-else>
        <v-order-history
            v-bind:orders_history="GET_ORDERS_HISTORY"
            v-bind:settings="GET_ORDER_SETTINGS"
            @openOrderInfoModal="openOrderInfoModal"
        />
      </div>
    </div>

    <Modal :data="this.slotProps">
      <template #data="slotProps">
        <v-order-history-card :order="order" :settings="this.GET_ORDER_SETTINGS" />
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
  computed: mapGetters(["GET_ORDERS_HISTORY", "GET_ORDER_SETTINGS", "GET_IS_FETCHING"]),
  methods: {
    ...mapActions(["FETCH_ORDERS_HISTORY", "FETCH_ORDER_SETTINGS"]),
    ...mapMutations(["UPDATE_IS_FETCHING"]),
    openOrderInfoModal(id){
      for(let key in this.GET_ORDERS_HISTORY) {
        if (id === this.GET_ORDERS_HISTORY[key].id){
          this.order = this.GET_ORDERS_HISTORY[key]
        }
      }
      // this.settings = this.GET_ORDER_SETTINGS;
      openModal('orderInfoModal');
    }
  },
  data(){
    return{
      orders_history: null,
      isFetching: null,
      order: null,
      slotProps: {
        class: 'modal-xl',
        target: 'orderInfoModal',
      }
    }
  },
  async created() {
    this.isFetching = true;
    await this.FETCH_ORDER_SETTINGS();
    await this.FETCH_ORDERS_HISTORY();
    // this.orders_history = this.GET_ORDERS_HISTORY;
    // this.settings = this.GET_ORDER_SETTINGS;
    this.isFetching = false;
  }
}
</script>

<style lang="scss" scoped>

</style>