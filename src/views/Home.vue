<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CategoryContainer />
  </div>
</template>

<script>
// @ is an alias to /src


import CategoryContainer from "../components/CategoryContainer";
export default {
  name: 'Home',
  components: {
    CategoryContainer

  }
}
</script>
