<template>
<div class="blog__modal" v-if="show" @click.stop="hideModal">
<div class="modal__content" @click.stop>
  <slot></slot>
</div>
</div>
</template>

<script>
export default {
  name: "BlogModal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal(){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.blog__modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.62);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__content {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border-radius: 10px;
  min-height: 60px;
  min-width: 350px;
}
</style>
