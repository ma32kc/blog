<template>
  <button class="blog__btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BlogButton"
}
</script>

<style scoped>
.blog__btn {
  background: #fff;
  border: 1px solid #4291ff;
  padding: 6px;
  display: inline-flex;
  justify-content: center;
  color: #595959;
  border-radius: 3px;
}
</style>
