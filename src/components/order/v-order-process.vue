<template>
  <div>
    <form ref="orderForm" class="needs-validation" action="" novalidate>
<!--      <v-input-->
<!--          v-model="test"-->
<!--          placeholder="Title"-->
<!--          type="text"-->
<!--          v-bind:v$="v$"-->
<!--          v-bind:id="test"-->
<!--      />-->
    <section class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h1 ">Оформление заказа</h1>
        <button type="button" @click="getBack" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="order_wrapper mb-4">
        <div class="d-lg-flex mb-4">
          <div class="form-check pe-5 col-12 col-md-4 d-flex align-items-center ps-0">
              <input class="form-check-input" type="radio" name="order_delivery" value="2" v-model="deliveryChoice" id="delivery" >
              <label class="form-check-label" for="delivery">
                Доставка в черте города - 250 руб.
		<br><small>(с 9:00 до 19:00)</small>
              </label>
          </div>

          <div class="form-check pe-5 col-12 col-md-4 d-flex align-items-center ps-0">
              <input class="form-check-input" type="radio" name="order_delivery" value="3" v-model="deliveryChoice" id="delivery" >
              <label class="form-check-label" for="delivery">
                Доставка за городом - 350 руб.
		<br><small>(с 9:00 до 19:00)</small>
              </label>
          </div>

          <div class="form-check pe-5 col-12 col-md-4 d-flex align-items-center ps-0">
            <input class="form-check-input" type="radio" name="order_delivery" value="1" v-model="deliveryChoice" id="pick_up">
            <label class="form-check-label" for="pick_up">
              Самовывоз<br>
	      <small>(с 8.30 до 17.30)</small>
            </label>
	    

          </div>
        </div>
        <div class="order_cost mb-5">
          <p class="h6">Сумма заказа: {{ GET_TOTAL_COUNT }} &#8381; </p>
          <v-transition-expand>
            <p v-show="deliveryChoice === '2' || deliveryChoice === '3'" class="h6 m-0">Сумма доставки: {{ deliveryCost }} &#8381; </p>
          </v-transition-expand>
          <p class="h6 pt-2">Итого: {{ getTotalPrice() }} &#8381; </p>
        </div>

          <div class="order_user row">
            <div class="mb-3 col-12 col-md-4" :class="{ error: v$.clientName.$errors.length }">
              <!--        <label for="name" class="form-label">Имя</label>-->
              <input v-model="clientName" type="text" class="form-control has-validation" id="name" placeholder="Имя" required>
              <div class=" input-errors" v-for="error of v$.clientName.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="mb-3 col-12 col-md-4" :class="{ error: v$.clientPhone.$errors.length }">
              <!--                    <label for="clientPhone" class="form-label">Телефон</label>-->
              <input v-model="clientPhone" type="tel" class="form-control" id="clientPhone" placeholder="Телефон">
              <div class=" input-errors" v-for="error of v$.clientPhone.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="mb-3 col-12 col-md-4" :class="{ error: v$.clientEmail.$errors.length }">
              <!--        <label for="lastname" class="form-label">Фамилия</label>-->
              <input v-model="clientEmail" type="email" class="form-control" id="email" placeholder="Email">
              <div class=" input-errors" v-for="error of v$.clientEmail.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
      </div>
    </section>

      <v-transition-expand>
        <section v-if="deliveryChoice === '2' || deliveryChoice === '3'" class="address">
          <h1 class="h1 mb-3">Адрес</h1>
          <div class="order_user_address">
            <div class="row">
              <div class="mb-3 col-12 col-md-5" :class="{ error: v$.clientCity.$errors.length }">
                <input v-model="clientCity" type="text" class="form-control" id="city" placeholder="Населенный пункт">
                <div class=" input-errors" v-for="error of v$.clientCity.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-12 col-md-5" :class="{ error: v$.clientStreet.$errors.length }">
                <input v-model="clientStreet" type="text" class="form-control" id="street" placeholder="Улица">
                <div class=" input-errors" v-for="error of v$.clientStreet.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div class="mb-3 col-12 col-md-3 col-lg-2" :class="{ error: v$.clientBuildingNumber.$errors.length }">
                <input v-model="clientBuildingNumber" type="text" class="form-control" id="building_number" placeholder="Номер дома">
                <div class=" input-errors" v-for="error of v$.clientBuildingNumber.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div class="mb-3 col-12 col-md-3 col-lg-2" :class="{ error: v$.clientApartment.$errors.length }">
                <!--        <label for="lastname" class="form-label">Фамилия</label>-->
                <input v-model="clientApartment" type="text" class="form-control" id="apartment" placeholder="Квартира">
                <div class=" input-errors" v-for="error of v$.clientApartment.$errors" :key="error.$uid">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </v-transition-expand>

    <section class="mb-4">
      <h1 class="h1 mb-4 pt-4">Способ оплаты</h1>
      <div class="d-lg-flex justify-content-between">
<!--              <div class="form-check col-12 col-md-4 d-flex align-items-center ps-0 w-auto">
          <input v-model="paymentMethod" value="3" class="form-check-input" type="radio"
                 name="payment_method" id="online_pay" checked>
          <label class="form-check-label" for="online_pay">
            Онлайн на сайте
          </label>
        </div>
-->
        <div class="form-check col-12 col-md-4 d-flex align-items-center ps-0 !w-auto">
          <input v-model="paymentMethod" value="1" class="form-check-input" type="radio"
                 name="payment_method" id="cash_pay">
          <label class="form-check-label" for="cash_pay">
            Наличными при получении
          </label>
        </div>
        <div class="form-check col-12 col-md-4 d-flex align-items-center ps-0 !w-auto">
          <input v-model="paymentMethod" value="2" class="form-check-input" type="radio"
                 name="payment_method" id="card_pay">
          <label class="form-check-label" for="card_pay">
            Курьеру через терминал
          </label>
        </div>
      </div>
    </section>

    <v-transition-expand>
      <section v-if="deliveryChoice === '2' || deliveryChoice === '3'" class="mb-2 mb-md-4">
        <h1 class="h1 mb-4">Время</h1>
        <p class="mb-0"> Доставка работает с 9 до 19 часов по местному времени.</p>
        <div class="d-lg-flex">
          <div class="form-check pe-5 col-12 col-md-4 p-0 d-flex align-items-center">
            <input class="form-check-input" type="radio" name="delivery_time" value="sooner" v-model="deliveryTimeOption" id="nearest_time" checked>
            <label class="form-check-label" for="nearest_time">
              Ближайшее
            </label>
          </div>
          <div class="form-check pe-5 col-12 p-0 d-flex align-items-md-center flex-column flex-md-row specific_time_block">
            <div>
              <input class="form-check-input" type="radio" name="delivery_time"
                    value="specific" v-model="deliveryTimeOption" id="pick_time"
                    @change="generateTime"
              >
              <label class="form-check-label" for="pick_time">
                К определенному
              </label>
            </div>
          </div>
        </div>
      </section>
    </v-transition-expand>


    <v-transition-expand>
        <div v-if="deliveryTimeOption === 'specific'">
          <div class="d-flex flex-column flex-md-row">
            <div :class="{ error: v$.deliveryTime.$errors.length }" class="pb-2 pb-md-0 pe-5 d-flex flex-column">
              <label class="pe-3" for="time_picker">Выберите время:</label>
              <input class="time_input px-2 py-1" type="time" id="time_picker" step="300"
                  v-model="deliveryTime"
                  min="9:00"
                  max="19:00">
              <div class="input-errors time_input" v-for="error of v$.deliveryTime.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div :class="{ error: v$.deliveryDate.$errors.length }" class="pb-2 pb-md-0 pe-5 d-flex flex-column">
              <label class="pe-3" for="date_picker">Выберите дату:</label>
              <input class="time_input px-2 py-1" type="date" id="date_picker"
                  v-model="deliveryDate" >
              <div class="input-errors time_input" v-for="error of v$.deliveryDate.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>
        </div>
    </v-transition-expand>

    <div class="comment py-3">
      <div class="form-floating">
        <textarea v-model="clientMessage" class="form-control" id="comments" style="height: 200px"></textarea>
        <label for="comments">Комментарий к заказу</label>
      </div>
    </div>
    <div class="agreement">
      <div class="mb-3 p-0 d-flex align-items-center">
        <input class="form-check-input" type="checkbox" value="" id="offerta_granted" v-model="offerta">
        <label class="form-check-label px-2" for="offerta_granted">
          Согласен с правилами <a href="/offerta" target="_blank"> публичной оферты </a>
        </label>
      </div>
      <div class="mb-3 p-0 d-flex align-items-center">
        <input class="form-check-input" type="checkbox" value="" id="agreement_granted" v-model="agreement">
        <label class="form-check-label px-2" for="agreement_granted">
          Согласен с правилами <a href="/agreement" target="_blank"> обработки персональных данных </a>
        </label>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
        <button @click="getBack" type="button" class="btn btn-primary" data-bs-dismiss="modal">Назад</button>
        <button type="button" class="btn btn-success"
          @change="acceptAgreement" :disabled="!agreement || !offerta" @click="proceedOrder" >
          {{this.paymentMethod === '3' ? 'Оформить заказ и перейти к оплате' : 'Оформить заказ'}}
        </button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import useVuelidate from '@vuelidate/core';
import { required, email, helpers, requiredIf  } from '@vuelidate/validators';
import VInput from "../parts/v-input";
import VTransitionExpand from "../parts/v-transition-expand";
import {validateDate, validateTime} from "../functions/validation";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(timezone);
dayjs.extend(relativeTime);


export default {
  name: "v-order-process",
  components: {VTransitionExpand, VInput},
  computed: mapGetters(["GET_TOTAL_COUNT"]),
  methods: {
    ...mapActions(["FETCH_EXECUTE_ORDER"]),

    generateTime(){
      let time_input = document.querySelector('#time_picker');
      let date_input = document.querySelector('#date_picker');

      /**
       *  with 60 minutes added
       */
      let datestamp = dayjs().add(1, 'hour');

      /**
       * simulate a touche event on input
       * @type {Event}
       */
      if (this.deliveryTimeOption === 'specific') {
        let event = document.createEvent('Event');
        event.initEvent('input', true, true);
        time_input.dispatchEvent(event);
        date_input.dispatchEvent(event);
      }

      this.deliveryTime = datestamp.format("HH:mm");
      this.deliveryDate = datestamp.format("YYYY-MM-DD") ;
    },
    acceptAgreement(){
      this.agreement = !this.agreement;
      this.offerta = !this.offerta;
    },
    getTotalPrice(){
      if (this.deliveryChoice === '1') {
        return this.GET_TOTAL_COUNT;
      } else if (this.deliveryChoice === '2') {
        return this.GET_TOTAL_COUNT + this.deliveryCost;
      } else {
        return this.GET_TOTAL_COUNT + this.deliveryCostOutsite;
      }
    },
    proceedOrder(e){
      if (this.deliveryTimeOption === 'sooner') {
        this.generateTime();
      }
      this.v$.$validate();
      console.log(this.v$.$error);
      if (!this.v$.$error) {
        let data = this.makeRequestData();
        this.FETCH_EXECUTE_ORDER(data)
      }
    },
    makeRequestData(){
      let data = {
        data: {
          payment_system: this.paymentMethod,
          delivery_type: this.deliveryChoice,
          phone: this.clientPhone,
          time: this.deliveryDate + ' ' + this.deliveryTime,
          name: this.clientName
        }
      }
      if (this.deliveryChoice === '2'){
        data.data.address = this.clientCity + ' ' + this.clientStreet + ' ' + this.clientBuildingNumber + ' ' + this.clientApartment;
      }
      if (this.clientEmail){
        data.data.email = this.clientEmail
      }
      if (this.clientMessage){
        data.data.comment = this.clientMessage
      }
      return data;
    },
    getBack(){
      this.$refs.orderForm.reset();
    },
    calculateTimeDiff(){
      let actualtime = dayjs().hour();
      let vltime = dayjs().tz("Asia/Vladivostok").hour();
      this.timeDifference = vltime - actualtime;
    },
  },
  props: {
    profile: {
      type: Object
    }
  },
  data(){
    return{
      v$: useVuelidate(),
      // test: null,
      deliveryChoice: '2',
      deliveryCost: 250,
      deliveryCostOutsite: 350,
      clientName: this.profile.name || null,
      clientPhone: this.profile.phone || null,
      clientEmail: this.profile.email || null,
      clientCity: this.profile.address ? this.profile.address.split(' ')[0] : null,
      clientStreet: this.profile.address ? this.profile.address.split(' ')[1] : null,
      clientBuildingNumber: this.profile.address ? this.profile.address.split(' ')[2] : null,
      clientApartment: this.profile.address ? this.profile.address.split(' ')[3] : null,
      paymentMethod: '3',
      deliveryTimeOption: 'sooner',
      deliveryTime: null,
      deliveryDate: null,
      clientMessage: null,
      agreement: true,
      offerta: true,
      timeDifference: null
    }
  },
  validations(){
    return{
      // test: { required },
      clientName: { required  : helpers.withMessage('Введите имя', required)},
      clientPhone: { required: helpers.withMessage('Введите телефон', required)},
      clientEmail: {email: helpers.withMessage('Введите корректный email', email)},
      clientCity: { requiredIf: helpers.withMessage('Введите населенный пункт', requiredIf(()=>{
        return this.deliveryChoice === '2'}))},
      clientStreet: { requiredIf: helpers.withMessage('Введите улицу', requiredIf(()=>{
          return this.deliveryChoice === '2'}))},
      clientBuildingNumber: { requiredIf: helpers.withMessage('Введите номер дома', requiredIf(()=>{
          return this.deliveryChoice === '2'}))},
      clientApartment: { requiredIf: helpers.withMessage('Введите номер квартиры', requiredIf(()=>{
          return this.deliveryChoice === '2'}))},

      deliveryTime: {requiredIf: helpers.withMessage('Некорректная дата доставки2', requiredIf(()=>{
          return this.deliveryTimeOption !== 'sooner'})),
        validateTime: helpers.withMessage('Введите корректное время доставки', validateTime)},

      deliveryDate: {requiredIf: helpers.withMessage('Некорректная дата доставки2', requiredIf(()=>{
          return this.deliveryTimeOption !== 'sooner'})),
        validateDate: helpers.withMessage('Некорректная дата доставки', validateDate)}

    }
  },
  mounted() {
    this.calculateTimeDiff();
    console.log(this.profile)
  }
}
</script>

<style lang="scss" scoped>
.error-msg{
  color: red;
  &.input-time{
    width: 200px;
    max-width: 200px;
  }
}
.error{
  input{
    border-color: red;
  }
}
.form-check-input{
  width: 18px;
  height: 18px;
  margin: 0 10px 0 0;
}
.delivery-option-fade-enter-from,
.delivery-option-fade-leave-to {
  opacity: 0;
}
.delivery-option-fade-enter-active,
.delivery-option-fade-leave-active {
  transition: opacity 0.8s ease;
}
.delivery-option-fade-move{
  transition: all 0.9s ease;
}
.time_input{
  width: 200px;
  max-width: 200px;
}
.specific_time_block{
  max-width: 300px;
}






.modal-body::-webkit-scrollbar {
  display: none!important;
}
.modal-body {
  -ms-overflow-style: none!important;  /* IE and Edge */
  scrollbar-width: none!important;  /* Firefox */
}
form::-webkit-scrollbar {
  display: none!important;
}
form {
  -ms-overflow-style: none!important;  /* IE and Edge */
  scrollbar-width: none!important;  /* Firefox */
}
</style>
