<template>
<select class="blog__select" v-model="modelValue" @change="changeOption">
  <option disabled value="">Выберите из списка</option>
  <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
</select>
</template>

<script>
export default {
  name: "BlogSelect",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue',event.target.value)
    }
  }
}
</script>

<style scoped>
.blog__select {
  background: #fff;
  border: 1px solid #4291ff;
}
</style>
