<template>
  <main>
    <v-b-header />
    <div
        v-if="!GET_IS_FETCHING"
        class="content container"
    >
      <router-view v-slot="{ Component, route }">
        <transition name="route-fade" mode="out-in" appear>
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
      <Modal :data="this.slotProps">
        <template #data="slotProps">
          <v-order-status-popup :message="this.GET_ORDER_NOT_FOUND_MESSAGE" />
        </template>
      </Modal>
    </div>

    <div v-else class="content">
      <v-loader />
    </div>
    <v-footer />
    <notifications
     position="bottom left"/>
  </main>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import VHeader from "./components/header/v-header";
import VBHeader from "./components/header/v-b-header";
import VFooter from "./components/footer/v-footer";
import Modal from "./components/parts/Modal";
import VLoader from "./components/parts/v-loader";
import VOrderStatusPopup from "./components/popup/v-order-status-popup";
import VNotification from "./components/parts/v-notification";

export default {
  name: "App",
  components: {VNotification, VOrderStatusPopup, VLoader, Modal, VBHeader, VHeader, VFooter },
  computed: mapGetters(["GET_IS_FETCHING", "GET_PROFILE", "GET_ORDER_NOT_FOUND_MESSAGE"]),
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "FETCH_CART", "FETCH_PROFILE"]),
    ...mapMutations((["UPDATE_IS_FETCHING"])),
  },
  data(){
    return{
      slotProps: {
        target: 'orderStatusWindow'
      }
    }
  },
  async created(){
    this.UPDATE_IS_FETCHING(true);
    await this.FETCH_PRODUCTS();
    await this.FETCH_CART();
    await this.FETCH_PROFILE();
    this.UPDATE_IS_FETCHING(false);
  }
}
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 300;
}
*{
  margin: 0;
  padding: 0;
  font-weight: 300;
}
body, html{
  width: 100%;
  //height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
.content{
  position: relative;
  margin-top: 70px;
}
html::-webkit-scrollbar {
  display: none!important;
}
html {
  -ms-overflow-style: none!important;  /* IE and Edge */
  scrollbar-width: none!important;  /* Firefox */
}
.router-link-active{
  color: #000!important;
  font-weight: 500;
}
.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
}
.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.4s ease;
}
.content {
  min-height: calc(100vh - 100px);
}
</style>
