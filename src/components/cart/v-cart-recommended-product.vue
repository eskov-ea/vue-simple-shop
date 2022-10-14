<template>
  <div class="card" style="width: 18rem;">
    <img :src="this.domain + item.images[Object.keys(item.images)[0]].url" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> {{ item.name }} </h5>
      <button @click="alert('added')" class="btn btn-primary">Выбрать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cart-recommended-product",
  props: {
    domain: {
      type: String,
      default() {
        return '';
      }
    },
    item: {
      type: Object,
      default(){
        return {};
      }
    },
  }
}
</script>

<style scoped>

</style>