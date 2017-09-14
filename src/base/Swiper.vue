<template lang="html">
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide class="slide-item" v-for="(val, index) in data" key="index">
            <img :src="val" alt=""></swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            swiperOption: {
                // autoplay: 1000,
                setWrapperSize :true,
                observeParents:true
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
    img
        width 100%
        height 300px
</style>
