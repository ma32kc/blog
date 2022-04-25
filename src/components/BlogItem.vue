<template>
  <div class="blog__item">
    <div class="blog__top">
      <div class="blog__left">
        <div class="blog__title">{{post.title}}</div>
        <div class="blog__body">{{post.body}}</div>
      </div>
      <div class="blog__right">
        <blog-button @click="$emit('redact', post)">редактировать</blog-button>
        <blog-button @click="$emit('remove', post)">удалить</blog-button>
      </div>
    </div>
    <div class="blog__bottom">
      <blog-button>читать полностью</blog-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.blog__item {
  background: #aac0ff;
  border: 3px solid #4291ff;
  padding: 10px;
  width: 700px;
  margin: 0 auto;
  border-radius: 4px;
}

.blog__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 5px;
}

.blog__bottom {
  display: flex;
  justify-content: center;
}

.blog__title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 5px;
}

.blog__body {
  color: #595959;
}

.blog__left {
  display: flex;
  flex-direction: column;
}

.blog__right {
  display: flex;
  column-gap: 5px;
}
</style>
