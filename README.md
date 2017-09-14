## icon图标
- 首页 icon-shouye   
- 列表页 icon-list  
- 添加 icon-54 
- 返回icon-fanhui

## 代理后端端口是3000 端口

## 需要完成的接口
- /api/hot GET 获取热门图书
- /api/book GET 获取所有图书 返回数组
- /api/book?id=x GET 获取某一本图书 返回对象
- /api/book?id=x DELETE 删除某一本图书 返回空对象
- /api/book?id=x reqbody(修改的内容) PUT 修改某一本图书 返回修改后的那一项
- /api/book reqbody(添加的内容) POST 增加图书 返回增加后的那一项


## 轮播图README
```
//import
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//data example
<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
```
## 延迟加载README
```
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
```
