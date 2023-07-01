<template>
  <div>
    <van-swipe class="carousel" autoplay="1000">
      <van-swipe-item v-for="carousel in carouselList" :key="carousel.cid" indicator-color="white">
        <van-image :src="carousel.img">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
    <van-divider />
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-card v-for="product in productList" :key="product.pid" :price="product.sale_price" :desc="product.desc" :title="product.pname" :thumb="product.imgUrl">
        <template #tags>
          <van-space>
            <van-tag plain type="primary">原价：{{ product.original_price }}</van-tag>
            <van-divider />
            <van-tag plain type="primary">销量：{{ product.sales }}</van-tag>
          </van-space>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useHomeSerivice } from '@/api/home'
import { HomeManageType } from '@/interface/model/home'

export default defineComponent({
  name: 'Home',
  setup() {
    const homeSerivice = useHomeSerivice()
    const state = {
      loading: ref(false),
      finished: ref(false),
      error: ref(false),
      carouselList: ref<Array<HomeManageType.CarouselInterface>>([]),
      productList: ref<Array<HomeManageType.ProductInterface>>([]),
      pagesize: ref<number>(10),
      pagecount: ref<number>(1)
    }
    const getCarouselList = async () => {
      const result = await homeSerivice.getCarouselList({})
      state.carouselList.value = result.result
    }
    // const getProductList = async () => {}
    const onLoad = async () => {
      state.loading.value = true
      const result = await homeSerivice
        .getGoodsList({
          pagesize: state.pagesize.value,
          pagecount: state.pagecount.value
        })
        .catch(() => {
          state.error.value = true
        })
      if (result.code == 1) {
        state.pagecount.value = state.pagecount.value + 1
        state.productList.value = [...state.productList.value, ...result.result]
      } else {
        state.finished.value = true
      }
      state.loading.value = false
    }
    onMounted(() => {
      getCarouselList()
      // getProductList()
    })
    return {
      ...state,
      onLoad
    }
  }
})
</script>

<style lang="less" scoped>
.carousel {
  height: 180px;
  overflow: hidden;
  &.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 100%;
  }
}
</style>
