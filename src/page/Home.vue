<template>
  <div class="home">
      <MHeader title="首页" back="true"></MHeader>
      <div class="scroll">
          <Swiper :data="sliders"></Swiper>
          <h3>热门图书</h3>
          <Loading v-if="isLoading"></Loading>
          <ul class="list">
              <li v-for="(book, index) in books" key="index">
                  <img :src="book.bookCover" alt="">
                  <span>{{book.bookInfo}}</span>
                  <strong>{{book.bookPrice}}</strong>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import MHeader from '../base/MHeader.vue';
import Swiper from '../base/Swiper.vue';
import Loading from '../base/Loading.vue';
import axios from 'axios';
export default {
    data(){
      return {
          sliders: [],
          books: [],
          isLoading: true
      }
    },
    created() {
        this.getSliders();
        this.getBooks();
    },
    activated() {
        this.getBooks();
    },
    methods: {
        getSliders() {
            axios.get('/api/sliders').then(res=>{
                this.sliders = res.data;
            });
        },
        getBooks() {
            axios.get('/api/hot').then(res=>{
                setTimeout(()=>{
                    this.books = res.data;
                    this.isLoading = false;
                }, 1000);
            });
        }
    },
    components: {
        MHeader,
        Swiper,
        Loading
    },
    computed: {},
}
</script>

<style lang="stylus" scoped>
.home
    height: 100%
h3
    padding-left 2%
    font-weight normal
    font-size 20px
.list
    width 100%
    padding 0
    display flex
    flex-wrap wrap
    li
        display flex
        flex-direction column
        align-items center
        width 50%
        img
            width 150px
            height 150px
</style>
