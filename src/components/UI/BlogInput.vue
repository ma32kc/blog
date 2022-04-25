<template>
<input :value="value" @input="updateInput" class="blog__input" type="text">
</template>

<script>
export default {
  name: "BlogInput",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
.blog__input {
  background: #fff;
  border: 1px solid #4291ff;
}
</style>
