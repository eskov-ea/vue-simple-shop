<template>
  <div class="row mt-3">
    <div class="d-flex justify-content-end">
      <button @click="onCloseModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <form ref="orderStatusPopup">
      <div class="form-group mb-3" :class="{ error: v$.pin.$errors.length }">
        <label for="order_id">Номер заказа</label>
        <input v-model="pin" type="number" class="form-control" id="order_id">
        <div class=" input-errors" v-for="error of v$.pin.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form-group mb-3" :class="{ error: v$.phone.$errors.length }">
        <label for="phone_number">Номер телефона</label>
        <input v-model="phone" type="tel" class="form-control" id="phone_number" aria-describedby="phone_number_help">
        <div class=" input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="mt-3">
        <p class="text-danger"> {{ message }}</p>
      </div>
    </form>

<!--    <div class="form-group mb-3">-->
<!--      <label for="phone_number">Номер телефона</label>-->
<!--      <input v-model="phone" type="tel" class="form-control" id="phone_number" aria-describedby="phone_number_help">-->
<!--      <small id="phone_number_help" class="form-text text-muted">*введите номер телефона с которого был сделан заказ</small>-->
<!--    </div>-->
    <div class="d-flex justify-content-end">
      <button
          type="button" class="btn btn-success"
        @click="checkOrderInfo"
      >
        Проверить статус
      </button>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import useVuelidate from '@vuelidate/core'
import { required, helpers, requiredIf  } from '@vuelidate/validators'
import {mapActions} from "vuex";
import {unlockBodyScroll} from "../functions/bodyScroll";

export default {
  name: "v-order-status-popup",
  methods: {
    ...mapActions(["FETCH_ORDER_INFORMATION"]),
    checkOrderInfo(e){
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = {
          pin: this.pin,
          callback: this.$refs.orderStatusPopup
        }
        this.FETCH_ORDER_INFORMATION(data);
      }
    },
    onCloseModal(e){
      let el = e.target;
      if(el.classList.contains('modal') || el.classList.contains('btn-close')){
        this.$refs.orderStatusPopup.reset();
      }
    }
  },
  props: {
    message: {
      type: String,
      default(){ return null}
    }
  },
  data(){
    return {
      v$: useVuelidate(),
      pin: null,
      phone: null
    }
  },
  validations(){
    return {
      pin: { required  : helpers.withMessage('Введите номер заказа', required)},
      phone: { required: helpers.withMessage('Введите телефон', required)},
    }
  },
  mounted() {
    window.addEventListener('click', this.onCloseModal)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.onCloseModal)
  }
}
</script>

<style lang="scss" scoped>
.error-msg{
  color: red;
}
.error{
  input{
    border-color: red;
  }
}
</style>