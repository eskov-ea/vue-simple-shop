<template>
    <div>        
	<div class="container" style="padding-top: 60px; text-align: center;">
	  <div class="row align-items-start">
    	    <div class="col">
              <i class="bi bi-patch-check"></i> <br><b>Бесплатная доставка<br> при заказе от 3000 руб.</b>
            </div>
            <div class="col">
             <i class="bi bi-gem"></i> <br><b>Премиальные продукты<br> ресторанного качества</b>
           </div>
          </div>        
         </div>        

      <div class="content">
        <Catalog />
      </div>       
      <v-item-popup
          v-show="GET_POPUP_CONDITION.isShowPopup"
          v-bind:product_data="GET_POPUP_CONDITION.popupData"
          v-bind:amount="GET_OBJECT_CART[GET_POPUP_CONDITION.popupData.id]"
      />
      <div class="btn_container" style="z-index: 2;">
        <button class="btn btn-secondary btn-lg"
                :disabled="!GET_CART.length"
                :class="{'active': GET_CART.length}"
                @click="proceedOrder">Оформить заказ</button>
      </div>
    </div>
</template>

<script>
import Catalog from "../components/products/Catalog";
import {mapActions, mapGetters, mapMutations} from "vuex";
import VItemPopup from "../components/popup/v-item-popup";
import router from "../router";
import Modal from "../components/parts/Modal";
import {unlockBodyScroll} from "../components/functions/bodyScroll";

export default {
  name: 'Home',
  components: {
    Modal,
    VItemPopup,
    Catalog
  },
  computed: mapGetters(["GET_PRODUCTS", "GET_POPUP_CONDITION","GET_CART", "GET_OBJECT_CART"]),
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "FETCH_CART"]),
    ...mapMutations(["CLOSE_POPUP"]),
    proceedOrder(){
      router.push({ name: 'cart'})
    },
    closeModalWindow(e){
      let el = e.target;
      if(el.classList.contains('v-popup_wrapper')){
        this.CLOSE_POPUP();
        unlockBodyScroll();
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.closeModalWindow)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.closeModalWindow)
  }
}
</script>

<style lang="scss" scoped>
.content{
  position: relative;
}
.btn_container{
  position: sticky;
  bottom: 20px;
  display: flex;
  justify-content: flex-end;
  button{
    width: 120px;
    height: 65px;
    margin-right: 15px;
    opacity: 1;
    font-size: 1rem;
    transition: background-color 0.6s ease, opacity 1s ease, transform 0.4s ease;
    &.active{
      opacity: 1;
      background-color: #198754;
      transform: scale(1.3);
    }
    @media screen and (min-width: 992px){
      &:hover{
        cursor: pointer;
        background-color: #41d06a;
      }
    }
  }
}

i.bi {
	font-size: 42px;
}

</style>

