<template>
  <div class="d-header-wrap">
    <div class="logo"></div>
    <div class="title">
      <nuxt-link to="/">My Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
/**
 * create by    dengShen
 * createTime   2019/6/22 17:17:57
 */
export default {
  name: 'd-header',
  props: {},
  computed: {},
  data() {
    return {
      routeQuery: this.$route.query
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(`d-header is running...`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .d-header-wrap {
    padding: 0 24px;
    background-color: #fff;
    position: fixed;
    z-index: 2;
    height: 66px;
    display: flex;
    align-items: center;
    width: 100%;
  }
</style>
