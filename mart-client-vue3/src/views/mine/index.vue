<template>
  <div class="mine-wraper">
    <div class="mine-avatar">
      <van-image :width="80" :height="80" fit="fill" :src="userInfo?.avatar">
        <template v-slot:error>加载失败</template>
      </van-image>
      <p v-text="userInfo?.graph"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, onMounted, ref } from 'vue'
import { useMineSerivice } from '@/api/mine'
import { UserManageType } from '@/interface/model/user'

export default defineComponent({
  name: 'Mine',
  setup() {
    const store = useStore()
    const mineSerivice = useMineSerivice()
    const state = {
      userInfo: ref<UserManageType.UserInfoInterface>()
    }
    const getUserIdByToken = async () => {
      const result = await mineSerivice.getUserIdByToken({ token: store.state.user.token })
      store.dispatch({ type: 'user/SAVE_UID', payload: result.uid })
    }
    const getUserInfoById = async () => {
      const result = await mineSerivice.getUserInfoById({ uid: store.state.user.uid })
      console.log(result)
      state.userInfo.value = result.data
    }
    onMounted(() => {
      getUserIdByToken()
      getUserInfoById()
    })
    return {
      ...state
    }
  }
})
</script>

<style lang="less">
.mine-wraper {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: hsl(210, 85%, 77%);
  .mine-avatar {
    text-align: center;
    margin-top: 25px;
    & > p {
      font-size: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
      word-break: break-all;
      font-weight: 700;
    }
    & img {
      border: 3px solid #fff;
      border-radius: 80px;
    }
  }
}
</style>
