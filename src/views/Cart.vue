<template>
  <div>
    <v-cart v-bind:slotProps="slotProps" />
    <Modal :data="this.slotProps">
      <template #data="slotProps">
        <v-order-process :profile="this.GET_PROFILE" />
      </template>
    </Modal>
  </div>

</template>

<script>
import VCart from "../components/cart/v-cart";
import VCartRecommended from "../components/cart/v-cart-recommended";
import Modal from "../components/parts/Modal";
import VOrderProcess from "../components/order/v-order-process";
import {mapGetters} from "vuex";
export default {
  name: "cart",
  components: {VOrderProcess, Modal, VCartRecommended, VCart},
  computed: mapGetters(["GET_PROFILE"]),
  methods:{},
  data(){
    return{
      showModal: false,
      modalTypeByClass: 'modal-fullscreen',
      slotProps: {
        class: 'modal-fullscreen',
        target: 'orderModal'
      }
    }
  }
}
</script>

<style lang="scss" >
</style>