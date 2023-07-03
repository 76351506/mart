<template>
  <div>this Mine page</div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, onMounted, ref } from 'vue'
import { useMineSerivice } from '@/api/mine'

export default defineComponent({
  name: 'Mine',
  setup() {
    const store = useStore()
    const mineSerivice = useMineSerivice()
    const state = {
      carouselList: ref<Array<string>>([]),
      productList: ref<Array<string>>([])
    }
    const getUserIdByToken = async () => {
      const result = await mineSerivice.getUserIdByToken(store.state.user.token)
      console.log(result)
    }
    const getUserInfoById = async () => {
      // const result = await mineSerivice.getUserInfoById({})
      // state.productList.value = result.result
    }
    onMounted(() => {
      getUserIdByToken()
      // getUserInfoById()
    })
    return {
      ...state
    }
  }
})
</script>

<style></style>
