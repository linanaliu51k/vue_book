<template lang="html">
  <div class="bar">
      <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
      </router-link>
      <router-link to="/list">
          <i class="iconfont icon-shouyeliebiao"></i>
          <span>列表页</span>
      </router-link>
      <router-link to="/add">
          <i class="iconfont icon-tianjiayemian"></i>
          <span>添加页</span>
      </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
    .bar
        display flex
        align-items center
        position fixed
        left 0
        bottom 0
        width 100%
        height 60px
        background #777
        border-top 1px solid #ccc
        a {
            display flex
            flex-direction: column
            align-items center
            flex 1
        }
        .router-link-active {
            color blue
        }
</style>
