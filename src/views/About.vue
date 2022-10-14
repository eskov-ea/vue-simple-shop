<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-transition-expand>
      <div class="" v-if="expanded">
        Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.
      </div>
    </v-transition-expand>
    <button class="p-3 btn btn-primary my-2" @click="expanded = !expanded">
      {{ expanded ? `Shrink` : `Expand` }}
    </button>
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