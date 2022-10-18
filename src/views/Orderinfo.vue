<template>
  <div class="about">
    <h4 class="title_page">Доставка и оплата</h4>
    <v-transition-expand>
      <div class="" v-if="expanded">
        <br>
	<h5>Режим работы</h5>
        <p>Заказы принимаются с 8:30 до 17:30. Доставка с 9:00 до 19:00</p>

	<h5>Способы оплаты</h5>
        <p>Оплата осуществляется наличным способом или картой через терминал у курьера.</p>

	<h5>Доставка</h5>
        <p>По Владивостоку - 250 руб</p>
        <p>За город (за Зарей, за Сахалинской, остров Русский) - 350 руб</p>

	<h5>Доставка Бесплатно</h5>
	<p>При заказе от 3000 руб. или при самовывозе.</p>

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