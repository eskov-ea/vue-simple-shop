<template>
  <div
      :class="
             GET_IS_FETCHING ? 'preloader_container' : 'preloader_container preloader_disabled'
            "
  >
    <h1 class="preloader">Loading...</h1>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "v-preloader-popup",
  computed: mapGetters(["GET_IS_FETCHING"]),
}
</script>

<style scoped>
.preloader_container{
  width: 100%;
  height: 100%;
  z-index: 90;
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  overflow: hidden;
  visibility: visible;
}
.preloader_disabled{
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease 0s;
}
.preloader{
  font-size: 142px;
  text-align: center;
  vertical-align: center;
  margin-top: 20%;
}
</style>