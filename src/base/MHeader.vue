<template lang="html">
  <div class="header">
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
    props: ['title', 'back'],
    methods: {
        goBack() {
            this.$router.history.go(-1);
        }
    }
}
</script>

<style lang="stylus" scoped>
.header
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: pink;
    text-align center
    line-height 50px
    font-size 26px
    color #000
    z-index 1
    i {
        position: absolute;
        left 10px;
    }
</style>
