<template>
  <div class="article-wrap">
    <h1>{{article.title}}</h1>
    <p>{{article.content}}</p>

    <div class="comment-box">
      <h3>最新留言</h3>
      <div v-for="(item, index) of comments" :key="index" class="comment-item">
        {{item.commentContent}}
        <p>{{item.createTime | formatDate}}来自大侠{{item.userName}}</p>
      </div>
      <d-comment :article="article" @finish="init"></d-comment>
    </div>
  </div>
</template>

<script>
import DHeader from '../../components/d-header'
import DComment from '../../components/d-comment'
import {formatDate} from '../../utils/date'

/**
 * create by    dengShen
 * createTime   2019/7/3 10:39:24
 */

export default {
  name: 'articleItem',
  components: {DComment, DHeader},
  computed: {},
  data() {
    return {
      routeQuery: this.$route.query,
      article: {},
      comments: []
    }
  },
  created() {
  },
  filters: {
    formatDate: function (value) {
      return value && formatDate(value)
    }
  },
  asyncData({app}) {
    console.log(app)
    let id = app.router.currentRoute.params.id
    return id && app.$axios.get('/article/' + id).then(res => {
      console.log(res)
      return {
        article: res.data.data.article,
        comments: res.data.data.comments
      }
    })
  },
  mounted() {
  },
  methods: {
    init() {
      this.$axios.get(`/article/${this.article.id}`).then(res => {
        this.article = res.data.data.article
        this.comments = res.data.data.comments
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .article-wrap {
    text-align: center;
    padding: 24px;

    .comment-box {
      width: 600px;
      margin: 100px auto;
      .comment-item{
        padding-top: 24px;
      }
    }

  }
</style>
