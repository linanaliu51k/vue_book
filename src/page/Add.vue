<template>
  <div class="add">
      <MHeader title="添加"></MHeader>
      <div class="scroll">
          <form>
              <div class="form-group">
                  <label for="bookName" class="control-label">图片名称</label>
                  <input type="text" name="" value="" class="form-control" id="bookName" v-model="book.bookName" autocomplete="off">
              </div>
              <div class="form-group">
                  <label for="bookCover" class="control-label">图片地址</label>
                  <input type="text" name="" value="" class="form-control" id="bookCover" v-model="book.bookCover" autocomplete="off">
              </div>
              <div class="form-group">
                  <label for="bookPrice" class="control-label">图片价格</label>
                  <input type="text" name="" value="" class="form-control" id="bookPrice" v-model="book.bookPrice" autocomplete="off">
              </div>
              <div class="form-group">
                  <label for="bookInfo" class="control-label">图片信息</label>
                  <input type="text" name="" value="" class="form-control" id="bookInfo" v-model="book.bookInfo" autocomplete="off">
              </div>
              <div class="form-group">
                  <button type="button" class="btn btn-info" @click="add">添加</button>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import MHeader from '../base/MHeader';
import axios from 'axios';
export default {
    data(){
      return {
          book: {
              bookName: '',
              bookCover: '',
              bookPrice: '',
              bookInfo: '',
          }
      }
    },
    created() {

    },
    components: {
        MHeader
    },
    methods: {
        add() {
            axios.post('/api/book', this.book).then(res=>{
                this.book = {
                    bookName: '',
                    bookCover: '',
                    bookPrice: '',
                    bookInfo: '',
                }
            });
        }
    },
}
</script>

<style lang="stylus" scoped>
    .add
        height 100%
    .scroll
        padding 10px 20px 0
</style>
