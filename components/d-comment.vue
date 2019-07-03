<template>
  <div class="d-comment-wrap">
    <p> 留言板</p>
    <div class="input-box">
      <div class="input-item">
        <span>昵称</span>
        <label>
          <input type="text" maxlength="12" v-model="user.userName">
        </label>
      </div>
      <div class="input-item">
        <span>邮箱</span>
        <label>
          <input type="email" maxlength="18" v-model="user.email">
        </label>
      </div>
      <div class="input-item">
        <span>留言内容</span>
        <label>
          <textarea maxlength="500" v-model="user.commentContent"></textarea>
        </label>
      </div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
/**
 * create by    dengShen
 * createTime   2019/6/22 17:50:30
 */

export default {
  name: 'd-comment',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {},
  data() {
    return {
      routeQuery: this.$route.query,
      user: {
        userName: '',
        email: '',
        commentContent: ''
      }
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(`d-comment is running...`)
    },
    submit() {
      console.log(this.article)
      this.$axios.post('/comment', {
        articleId: this.article.id,
        commentContent: this.user.commentContent,
        userName: this.user.userName,
        email: this.user.email
      }).then(res => {
        this.user = {}
        this.$emit('finish')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .d-comment-wrap {

  }
</style>
