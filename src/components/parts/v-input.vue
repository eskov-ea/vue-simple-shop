<template>
<!--  :class="{ error: this.v$.id.$errors.length }"-->
  <div class="mb-3 col-12 col-md-4" :class="{ error: this.v$[id].$errors.length }">
    <label v-if="label">{{ label }}</label>
    <input
        v-bind="$attrs"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="field"
        :id="id"
    >
    <div class=" input-errors" v-for="error of v$[id].$errors" :key="error.$uid">
<!--      <div class="error-msg">{{ error.$message }}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "v-input",
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    v$: {
      type: Object
    }
  },
  mounted() {
    console.log('from custom input',this.v$)
  }
}
</script>

<style lang="scss" scoped>
.error-msg{
  color: red;
}
.error{
  input{
    border-color: red;
  }
}
</style>