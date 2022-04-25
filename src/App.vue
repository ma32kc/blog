<template>
  <div>
    <div class="blog">
      <blog-button @click="fetchPosts" class="download-btn">загрузить</blog-button>
      <blog-button @click="showModal">Создать пост</blog-button>
      <blog-select v-model:value="selectedSort" :options="sortOptions"></blog-select>
      <blog-input v-model:value="searchQuery" placeholder="Поиск"></blog-input>
      <blog-modal v-model:show="modalVisible">
        <blog-form :newPost="post" @create="createPost" @modify="modifyPost"></blog-form>
      </blog-modal>
      <blog-list :posts="searchedAndSortedPosts" @remove="removePost" @redact="redactPost" v-if="!loading"></blog-list>
      <div v-else>Загрузка...</div>
      <div class="blog__pages">
        <div
            class="blog__page"
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            :class="{'blog__page_active': page === pageNumber}"
            @click="changePage(pageNumber)"
        >{{ pageNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: [],
      post: {},
      createdPost: {},
      modalVisible: false,
      loading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  methods: {
    createPost (post) {
      this.posts.push (post)
      this.modalVisible = false
    },
    redactPost (post) {
      this.modalVisible = true
      this.post = post
    },
    modifyPost (post) {
      this.posts.forEach ((p, index) => {
        if (p.id === post.id) {
          this.posts[index] = post
        }
      })
      this.modalVisible = false
    },
    removePost (post) {
      confirm ("уверены?") ? this.posts = this.posts.filter (p => p.id !== post.id) : 0
    },
    showModal () {
      this.post = {}
      this.modalVisible = true
    },
    changePage(pageNumber) {
      this.page = pageNumber
    },
    async fetchPosts (e) {
      try {
        this.loading = true
        const response = await axios.get ('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil (response.headers['x-total-count'] / this.limit)
        const data = response.data
        this.posts = data
        e.target.remove ()
      } catch (e) {
        console.log (e)
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    sortedPosts () {
      return [...this.posts].sort ((post1, post2) => post1[this.selectedSort]?.localeCompare (post2[this.selectedSort]))
    },
    searchedAndSortedPosts () {
      return this.sortedPosts.filter (post => post.title.toLowerCase ().includes (this.searchQuery.toLowerCase ()))
    }
  },
  watch: {
    page() {
      this.fetchPosts()
    }
  }
}
</script>
<style>
.blog {
  padding: 10px 0;
  background: #f1f1f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  row-gap: 10px;
}

.download-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.blog__pages {
  margin-top: 10px;
  display: flex;
  column-gap: 10px;
}

.blog__page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 15px;
  background: #aac0ff;
  border: 1px solid #4291ff;
  padding: 10px;
  color: #ffffff;
  border-radius: 5px;
}

.blog__page_active {
  background: #8aa3ff;
}
</style>
