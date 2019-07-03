<template>
  <div>
    <d-header></d-header>
    <div class="layout">
      <nuxt/>
    </div>
  </div>
</template>
<script>
import DHeader from '../components/d-header'

export default {
  components: {DHeader}
}
</script>
<style>
  .layout {

    position: absolute;
    top: 66px;
    height: 100%;
    width: 100%;
    background-color: #eee;
  }
</style>
