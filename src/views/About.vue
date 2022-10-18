<template>
  <div class="about">
    <h4 class="title_page">О нас</h4>
    <v-transition-expand>
      <div class="" v-if="expanded">
	<p>АО Управляющая компания «Дальневосточный рыбак» создана в 2017 году в результате объединения в группу нескольких успешных компаний, давно зарекомендовавших себя на рынке рыбной промышленности. Изначально в группу компаний УК «ДВ рыбак» вошли ООО Рыбокомбинат «Островной»,  ООО «Поларис», ООО «Морской транспорт»,  ООО Торговый дом  «Морской регион» и ООО «Восток тур». Так же в УК «ДВ рыбак» входят вспомогательные компании по развитию острова Шикотан такие, как молочно-животноводческая ферма, строительная компания, охранное агентство  и др.</p>
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