<template>
  <div id="app">
    <transition name="slide">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Navbar from './base/Navbar.vue';

  export default {
    data(){
      return {}
    },
    methods: {},
    components: {
        Navbar
    },
    computed: {},
  }
</script>

<style lang="stylus">
    #app
        width 100%
        height 100%
    // .slide-enter
    //     transform translateX(100%)
    // .slide-enter-active
    //     transition all 4s
    // .slide-leave-active
    //     opacity 0
    //     transition all 3s

    html, border
        margin 0
        padding 0
    ul
        list-style: none
    a
        text-decoration none
        color #fff
    .scroll
        width 100%
        position: absolute
        left 0;
        top 50px
        bottom 60px
        overflow-x hidden
        overflow-y auto
</style>
