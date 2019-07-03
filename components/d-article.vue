<template>
  <div class="d-article-wrap">
    <div class="article-header">
      <span>发布日期{{article.createTime | formatDate}}</span>
      <span>{{article.title}}</span>
    </div>
    <div class="article-body" v-html="article.content">
    </div>

  </div>
</template>

<script>
/**
 * create by    dengShen
 * createTime   2019/6/22 17:50:45
 */
import {formatDate} from '../utils/date'

export default {
  name: 'd-article',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {},
  filters: {
    formatDate: function (value) {
      return value && formatDate(value)
    }
  },
  data() {
    return {
      routeQuery: this.$route.query
    }
  },
  created() {
    console.log('create')
  },
  mounted() {
    console.log('mounted')
    this.init()
  },
  asyncData() {
    console.log('async')
  },
  methods: {
    init() {
      console.log(`d-article is running...`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .d-article-wrap {

  }
</style>
