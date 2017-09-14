<template>
  <div class="list">
      <MHeader title="列表"></MHeader>
      <div class="scroll">
          <Loading v-if="isLoading"></Loading>
          <ul class="list">
              <router-link tag="li" :to="{name: 'detail', params: {bid: book.id}}" v-for="(book, index) in books" key="index">
                  <img :src="book.bookCover" alt="">
                  <div class="right">
                      <span>{{book.bookName}}</span>
                      <strong>{{book.bookPrice}}</strong>
                      <button type="button" class="btn btn-danger" @click.prevent="remove(book.id)">删除</button>
                  </div>
              </router-link>
          </ul>
      </div>
  </div>
</template>

<script>
import MHeader from '../base/MHeader';
import Loading from '../base/Loading.vue';
import axios from 'axios';
export default {
    data(){
      return {
          books: [],
          isLoading: true
      }
    },
    created() {
        this.getAllBooks();
    },
    activated() {
        this.getAllBooks();
    },
    methods: {
        getAllBooks() {
            axios.get('/api/book').then(res=>{
                axios.get('/api/hot').then(res=>{
                    setTimeout(()=>{
                        this.books = res.data;
                        this.isLoading = false;
                    }, 1000);
                });
            });
        },
        remove(id) {
            axios.delete(`/api/book?id=${id}`).then(res=>{
                this.books = this.books.filter(book=>id!=book.id);
            });
        }
    },
    components: {
        MHeader,
        Loading
    },
    computed: {},
}
</script>

<style lang="stylus" scoped>
.list
    margin-top 20px
    padding 0
    display flex
    flex-direction: column
    width 100%;
    li
        display flex
        margin-bottom 20px
        .right
            display flex
            flex-direction column
            padding-top 20px
            button
                width 80px
        img {
            width: 200px
            height: 200px
        }

</style>
