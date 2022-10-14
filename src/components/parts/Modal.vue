<template>
  <div class="modal fade"
       :id=" data ? data.target : 'modalWindow'" tabindex="-1"
       :aria-labelledby=" data ? data.target + 'Label' : 'modalWindowLabel'" aria-hidden="true">
    <div class="modal-dialog"
         :class="data? data.class: 'modal-dialog'"
    >
      <div class="modal-content">
        <div class="modal-body container">
          <slot name="data" :data="data"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>