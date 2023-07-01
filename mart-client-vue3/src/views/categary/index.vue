<template>
  <div>this Categary page</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useHomeSerivice } from '@/api/home'

export default defineComponent({
  name: 'Categary',
  setup() {
    const homeSerivice = useHomeSerivice()
    const state = {
      carouselList: ref<Array<string>>([]),
      productList: ref<Array<string>>([])
    }
    const getCarouselList = async () => {
      const result = await homeSerivice.getCarouselList({})
      state.carouselList.value = result.result
    }
    const getProductList = async () => {
      const result = await homeSerivice.getGoodsList({})
      state.productList.value = result.result
    }
    onMounted(() => {
      getCarouselList()
      getProductList()
    })
    return {
      ...state
    }
  }
})
</script>

<style></style>
