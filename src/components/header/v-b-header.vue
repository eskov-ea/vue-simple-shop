<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="logo" to="/">
        <img class="w-50" src="../../assets/logos/logo.jpeg" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ps-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li @click="closeMobMenu" class="nav-item">
            <router-link class="nav-link fs-5" aria-current="page" to="/">Меню</router-link>
          </li>
          <li @click="closeMobMenu" class="nav-item">
            <router-link class="nav-link fs-5 " aria-current="page" to="/about">О нас</router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" aria-current="page" to="/cart">Оформить заказ</router-link>-->
<!--          </li>-->
          <li class="nav-item">
            <a class="nav-link fs-5 order_status_btn" data-bs-toggle="modal" data-bs-target="#orderStatusWindow">Статус заказа</a>
          </li>
          <li @click="closeMobMenu" class="nav-item">
            <router-link class="nav-link fs-5" aria-current="page" to="/orders_history">История заказов</router-link>
          </li>
        </ul>
        <div class="nav-item dropdown">
          <a class="nav-link px-0 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Выбор языка
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Ru</a></li>
            <li><a class="dropdown-item" href="#">En</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {Collapse} from "bootstrap";

export default {
  name: "v-b-header",
  methods: {
    closeMobMenu(){
      new Collapse(document.getElementById('navbarSupportedContent'), {toggle:false}).hide();
    }
  },
  mounted() {
    window.addEventListener('resize', this.closeMobMenu);
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu{
  margin-right: 0px;
  right: 0;
  min-width: auto;
  @media screen and (min-width: 992px) {
    text-align: right;
  }
}
.logo{
  max-width: 130px;
}
.order_status_btn{
  cursor: pointer;
}
nav{
  position: fixed;
  width: 100%;
  z-index: 1001;
  top: 0;
  left: 0;
}
</style>
