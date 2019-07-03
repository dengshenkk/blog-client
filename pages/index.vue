<template>
  <div class="container">
    <div class="main">
      <div class="article-list" v-for="(article, index) of articles" :key="index">
        <d-article @click.native="toDetail(article.id)" :article="article"></d-article>
      </div>
    </div>
  </div>
</template>

<script>

import DHeader from '../components/d-header'
import DArticle from '../components/d-article'

export default {
  components: {DArticle, DHeader},
  data() {
    return {
      articles: []
    }
  },
  created() {
    console.log('create')
  },
  mounted() {
    console.log('mounted')
    this.init()
  },
  asyncData({app}) {
    console.log('async')
    return app.$axios.get('/articles').then(res => {
      return {articles: res.data.data}
    })
  },
  methods: {
    init() {
      console.log(`d-article is running...`)
    },
    toDetail(id) {
      this.$router.push({path: `articleItem/${id}`})
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    transition: all 1s ease;
  }

  .main {
    background-color: #eee;
    height: 100%;

    .article-list {
      text-align: center;
      padding: 24px;
    }
  }
</style>

