<template>
  <div class="d-comment-wrap">
    <fieldset class="fieldaset">
      <legend> 留言板</legend>
      <div class="input-box">
        <div class="input-item">
          <span>昵称</span>
          <label>
            <input placeholder="请输入昵称" type="text" maxlength="12" v-model="user.userName">
          </label>
        </div>
        <div class="input-item">
          <span>邮箱</span>
          <label>
            <input placeholder="请输入邮箱" type="email" maxlength="18" v-model="user.email">
          </label>
        </div>
        <div class="input-item">
          <span>留言内容</span>
          <label>
            <textarea placeholder="请发表高见" rows="4" maxlength="500" v-model="user.commentContent"></textarea>
          </label>
        </div>
        <div class="input-item">
          <button class="button" @click="submit">提交</button>
        </div>
      </div>
    </fieldset>

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
      if (!this.user.userName || !this.user.email || !this.user.commentContent) {
        return alert("请填写完整的信息")
      }
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
    padding: 20px;

    .fieldaset {
      padding: 20px;
    }

    .input-box {
      .input-item {
        min-height: 44px;
        display: flex;
        align-items: center;

        span {
          min-width: 100px;
        }

        input, textarea {
          width: 300px;
        }

        input {
          height: 32px;
        }

        textarea {
          height: 80px;
          resize: none;
        }
      }
    }

    .button {
      width: 200px;
      height: 32px;
    }
  }
</style>
