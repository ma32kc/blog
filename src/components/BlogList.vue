<template>
  <div v-if="posts.length > 0">
    <h2>Список постов</h2>
    <div class="blog__list">
      <transition-group name="blog__list">
        <blog-item
            v-bind:post="post"
            v-for="post in posts"
            :key="post.id"
            @remove="$emit('remove', post)"
            @redact="$emit('redact', post)">
        </blog-item>
      </transition-group>
    </div>
  </div>
  <div v-else>
    <h2>Постов нет</h2>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.blog__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

h2 {
  font-size: 2em;
  text-align: center;
  background: #aac0ff;
  border: 3px solid #4291ff;
  padding: 10px;
  color: #ffffff;
  width: 100vw;
}

.blog__list-enter-active,
.blog__list-leave-active {
  transition: all 0.4s ease;
}

.blog__list-enter-from,
.blog__list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.blog__list-move {
  transition: transform 0.5s ease;
}
</style>
