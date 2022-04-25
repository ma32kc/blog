<template>
  <form class="blog__form" @submit.prevent>
    <BlogInput class="blog__input" v-model:value="post.title" placeholder="Заголовок"></BlogInput>
    <BlogInput class="blog__input" v-model:value="post.body" placeholder="Описание"></BlogInput>
    <BlogButton v-if="post.id===undefined" @click="createPost">Создать</BlogButton>
    <BlogButton v-else @click="redactPost">редактировать</BlogButton>
  </form>
</template>

<script>
export default {
  name: "BlogForm",
  props: {
    newPost: {
      type: Object
    },
  },
  data () {
    return {
      post: {
        id: this.newPost.id,
        title: this.newPost.title,
        body: this.newPost.body
      }
    }
  },
  methods: {
    createPost () {
      console.log (this.post)
      this.post.id = Date.now ()
      this.$emit ('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    },
    redactPost () {
      this.$emit ('modify', this.post)
    }
  }
}
</script>

<style scoped>
.blog__form {
  padding: 10px;
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.blog__input {

}
</style>
