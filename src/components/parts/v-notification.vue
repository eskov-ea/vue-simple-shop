<template>
  <notifications group="custom-template"
                 :duration="15000"
                 :width="500"
                 animation-name="v-fade-left"
                 position="top left">

    <template slot="body" slot-scope="props">
      <div class="custom-template">
        <div class="custom-template-icon">
          <i class="icon ion-android-checkmark-circle"></i>
        </div>
        <div class="custom-template-content">
          <div class="custom-template-title">
            {{props.item.title}}

            Random number: {{props.item.randomNumber}}
            <div>
              Random number: {{props.item.randomNumber}}
            </div>
          </div>
          <div class="custom-template-text"
               v-html="props.item.text"></div>
        </div>
        <div class="custom-template-close"
             @click="props.close">
          <i class="icon ion-android-close"></i>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  name: "v-notification",
  data () {
    return {
      // id: 0,
      // animation: {
      //   enter: {
      //     opacity: [1, 0],
      //     translateX: [0, -300],
      //     scale: [1, 0.2]
      //   },
      //   leave: {
      //     opacity: 0,
      //     height: 0
      //   }
      // }
    }
  },
  methods: {
    show (group, type = 'custom') {
      const call = this.callit;
      const text = `
        Heelo! Start notificate brothers about errors!
        <br>
        <button class="fuck_btn" onclick=""> click me!</button>
        Date: ${new Date()}
      `
      this.$notify({
        group,
        clean: false,
        type,
        title: `Test ${type} notification #${this.id++}`,
        text,
        randomNumber: '100010010',
        data: {
          randomNumber: 100010010
        }
      })
    },
    clean (group) {
      this.$notify({ group, clean: true })
    },
  }
}
</script>

<style scoped>

</style>