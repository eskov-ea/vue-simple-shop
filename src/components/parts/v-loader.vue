<template>
  <transition>
    <div class="overlay">
      <div class="body">
        <button class="btn" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import {lockBodyScroll, unlockBodyScroll} from "../functions/bodyScroll";

export default {
  name: "v-loader",
  mounted() {
    lockBodyScroll();
  },
  beforeUnmount() {
    unlockBodyScroll();
  }
}
</script>

<style lang="scss" scoped>
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 98;
}
.btn{
  background-color: #ffffff;
  color: #000000;
  font-size: 2rem;
  span{
    width: 2rem;
    height: 2rem;
    color: #000000;
  }
}
</style>