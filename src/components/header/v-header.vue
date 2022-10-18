<template>
  <div class="header_wrapper">
    <header class="header">
      <nav class="header__container">
        <div class="header__nav">
          <div class="header__logo">
            <!-- <img  src="../../assets/logos/logo1.png" alt=""> -->
            <div>MCFEF</div>
          </div>
          <menu v-show="!this.mobile" class="header__menu menu">
            <ul>
              <li><router-link to="/">Каталог</router-link></li>
              <li><router-link to="/about">О нас</router-link></li>
              <li><router-link to="/cart">Оформить заказ</router-link></li>
              <li><router-link to="/order">Оформление заказа окно</router-link></li>
            </ul>
          </menu>
        </div>
        <div class="header__info info">
          <div class="info__phone">
            <a href="tel:+79145155525">8(914)5155525</a>
          </div>
          <div class="info__cart">
            <button class="order_btn">Оформить заказ</button>
          </div>
        </div>
        <div
            @click="toggleMobileNav"
            :class="{'icon-active' : this.mobileNav}"
            v-show="this.mobile"
            class="icon-menu"
        >
          <span></span><span></span><span></span>
        </div>
        <transition
            name="mobile-nav"
            v-show="this.mobileNav"
            class="dropdown-nav"
        >
          <div name="mobile-nav">
            <ul>
              <li><router-link to="/">Меню</router-link></li>
              <li><router-link to="/about">О нас</router-link></li>
              <li><router-link to="/cart">Оформить заказ</router-link></li>
              <li><router-link to="/order">Оформление заказа окно</router-link></li>
            </ul>
          </div>
        </transition>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "v-header",
  data(){
    return{
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav(){
      let body = document.querySelector('body');
      this.mobileNav = !this.mobileNav;
      this.mobileNav
      ? body.style.overflowY = 'hidden'
      : body.style.overflowY = 'auto'
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 768) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrapper{
  position: relative;
  width: 100%;
  height: 80px;
}
.header{
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5ee68;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  &__container{
    position: relative;
    height: 80px;
    font-size: 1.25rem;
    max-width: 1540px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: #000;
      text-decoration: none;
      padding: 0 15px 0 0;
    }
  }
  &__nav{
    width: 70%;
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  &__logo{
    display: flex;
    img{
      width: 150px;
      object-fit: contain;
      @media screen and (max-width: 552px){
        width: 120px;
      }
    }
  }
}
.menu{
  margin: 0;
  padding: 0;
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;
  }
  a.router-link-exact-active{
    font-weight: 900;
  }
}
.info{
  display: flex;
  flex-direction: row;
  align-items: center;
  &__phone{
    @media screen and (min-width: 992px){
      a:hover{
        color: #03376e;
      }
    }
    @media screen and (max-width: 552px){
      font-size: 0.825rem;
      padding-right: 10px;
    }
  }
  &__cart{}
  .order_btn{
    width: 100px;
    background-color: rgba(0, 0, 0, .05);
    border: 1px solid rgba(0, 0, 0, .5);
    color:  rgba(0, 0, 0, .5);
    height: 50px;
    border-radius: 5px;
    box-shadow: 2px 2px rgba(0, 0, 0, .5);
    font-size: 0.875rem;
    &.active{
      background-color: #ece136;
      color: #000;
      border: 1px solid #000;
      box-shadow: 2px 2px rgba(0, 0, 0, .5);
    }
    @media screen and (max-width: 768px){
      display: none;
    }
  }
}
.icon-menu {
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
    span {
      top: calc(50% - 1px);
      background-color: #000;
      left: 0px;
      position: absolute;
      height: 10%;
      width: 100%;
      transition: all 0.5s ease, visibility 0.05s ease;
      &:first-child {
        top: 0px;
      }
      &:last-child {
        top: auto;
        bottom: 0px;
      }
    }
}
.icon-active{
  span{
    visibility: hidden;
    opacity: 0;
  }
  span:first-child{
    transform: rotate(-45deg) translate(0);
    visibility: visible;
    opacity: 1;
    top: 50%;
  }
  span:last-child{
    top: 50%;
    transform: rotate(45deg);
    visibility: visible;
    opacity: 1;
  }
}
.dropdown-nav{
  position: absolute;
  top: 80px;
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100vh;
  ul {
    display: flex;
    background-color: #fff;
    right: 0;
    position: absolute;
    width: 40%;
    min-width: 200px;
    height: 100%;
    margin: 0;
    flex-direction: column;
    padding: 50px 20px;
    list-style: none;
    text-decoration: none;
    li{
      margin: 5px 0;
    }
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: all 0.7s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(100vw);
}
.mobile-nav-enter-to{
  transform: translateX(0);
}
</style>