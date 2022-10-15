import { createStore } from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
import order from './modules/order';
import {showNotification} from "../components/functions/js-notification";

export default createStore({
  state: {
    PORT: process.env.VUE_APP_PORT,
    DOMAIN: process.env.VUE_APP_DOMAIN,
    isFetching: false,
    profile: {
      name: null,
      phone: null,
      email: null,
      address: ''
    },
    popup: {
      isShowPopup: false,
      popupData: {},
      popupAmount: null
    }
  },
  mutations: {
    UPDATE_IS_FETCHING(state, value){
      state.isFetching = value;
    },
    OPEN_POPUP(state, data){
      state.popup.popupData = data.itemData;
      state.popup.popupAmount = data.itemAmount;
      state.popup.isShowPopup = true;
    },
    CLOSE_POPUP(state){
      state.popup.isShowPopup = false;
      setTimeout( () => {
        state.popup.popupData = {};
      }, 150)
    },
    UPDATE_PROFILE(state, data){
      state.profile = data;
    }
  },
  actions: {
    async FETCH_PROFILE(ctx){
      try{
        const res = await fetch(`${ctx.state.DOMAIN}:${ctx.state.PORT}/api/profile`,
            {
              method: 'GET',
              credentials: "include",
              mode: 'cors',
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
        const payload = await res.json();
        if(payload.meta.success === 'yes') {
          ctx.commit('UPDATE_PROFILE', payload.data);
        } else {
          for (let error in payload.meta.errors.data) {
            showNotification('Ошибка отправки данных', payload.meta.errors.data[error]);
          }
        }
      }
      catch (e) {
        console.log('Добро пожаловать в Пекарня Шикотан. Мы не смогли узнать вас и загрузить дополнительную информацию.')
      }
    }
  },
  getters: {
    GET_IS_FETCHING(state){
      return state.isFetching;
    },
    GET_DOMAIN(state) {
      return state.DOMAIN;
    },
    GET_PORT(state) {
      return state.PORT;
    },
    GET_POPUP_CONDITION(state){
      return state.popup;
    },
    GET_PROFILE(state){
      return state.profile;
    }
  },
  modules: {
    cart,
    products,
    order
  }
});
