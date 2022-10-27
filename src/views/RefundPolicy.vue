<template>
  <div class="about">
    <h4 class="title_page">Правила возврата</h4>
    <v-transition-expand>
      <div class="" v-if="expanded">
<br>


<p>ПРАВИЛА ВОЗВРТА</p>


      </div>
    </v-transition-expand>
  </div>
</template>
<script>
import { notify } from "@kyvg/vue3-notification";
import VTransitionExpand from "../components/parts/v-transition-expand";

export default {
  components: {VTransitionExpand},
  data(){
    return{
      expanded: true
    }
  }
}
</script>