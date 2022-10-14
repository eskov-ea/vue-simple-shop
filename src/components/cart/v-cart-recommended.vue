<template>
  <div class="container2">
    <h1 class="_title">Рекомендуем к вашему заказу:</h1>
    <div class="recommended">
      <div @click="scrollLeft" class="recommended__before">
        <span><i class="bi bi-chevron-compact-left"></i></span>
      </div>
      <div class="recommended_container">

        <div v-for="item in relatedItems" :key="item.id"
             class="card" style="width: 18rem;">
          <img :src="this.domain + item.images[Object.keys(item.images)[0]].url" class="card-img-top" alt="...">
          <div class="card-body py-1">
            <p class="card-title fs-6 fw-normal m-0"> {{ item.name }} </p>
            <p class=" fs-6 fw-normal m-0"> {{ item.price }} &#8381; </p>
            <button @click="addItemToCart(item.id)" class="btn btn-light">Добавить</button>
          </div>

        </div>
      </div>
      <div @click="scrollRight" class="recommended__after">
        <span><i class="bi bi-chevron-compact-right"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cart-recommended",
  methods: {
    async addItemToCart(id){
      this.$emit('addItemToCart', id)
    },
    scrollRight(){
      document.querySelector('.recommended_container').scrollLeft += 500;
    },
    scrollLeft(){
      document.querySelector('.recommended_container').scrollLeft -= 500;
    }
  },
  props: {
    domain: {
      type: String,
      default() {
        return '';
      }
    },
    relatedItems: {
      type: Object,
      default(){
        return {};
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommended_container::-webkit-scrollbar {
  display: none!important;
}
.recommended_container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.container2{
  width: 100%;
  margin-bottom: 20px;
}
.recommended{
  width: 100%;
  height: 260px;
  position: relative;
  display: flex;
  flex-direction: row;
  &__before,
  &__after{
    position: absolute;
    width: 40px;
    display: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 5rem;
    z-index: 100;
    @media screen and (min-width: 992px) {
      cursor: pointer;
      display: flex;
    }
  }
  &__before{
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    left: 0;
    top: 0;
    border-radius: 0px 0 0 0px;
  }
  &__after{
    border-radius: 0 0px 0px 0;
    position: absolute;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    right: 0;
    top: 0;
  }
}
.recommended_container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  column-gap:  5px;
  scroll-behavior: smooth;
  padding: 0;
}
.card{
  width: 200px!important;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;
  img{
    height: 130px;
    object-fit: cover;
  }
}
.card-body{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  p{
    flex: 1 1 auto;
  }
}
</style>