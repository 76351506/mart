<template>
  <div class="mine-wraper" v-if="userInfo">
    <div class="mine-avatar">
      <van-image :width="80" :height="80" fit="fill" :src="userInfo?.avatar">
        <template v-slot:error>加载失败</template>
      </van-image>
      <p v-text="userInfo?.graph"></p>
    </div>

    <div class="mine-list">
      <van-cell-group title="功能">
        <van-cell title="个人隐私" is-link to="index" />
        <van-cell title="协议条款" is-link to="index" />
        <van-cell title="关于我们" is-link to="index" />
      </van-cell-group>
      <van-cell-group title="系统">
        <van-cell title="清除缓存" is-link to="index" />
        <van-cell title="忘记密码" is-link to="index" />
        <van-cell title="退出登录" is-link to="index" />
      </van-cell-group>
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
      if (result.code) {
        await store.dispatch({ type: 'user/SAVE_UID', payload: result.uid })
        getUserInfoById()
      }
    }
    const getUserInfoById = async () => {
      const result = await mineSerivice.getUserInfoById({ uid: store.state.user.uid })
      state.userInfo.value = result.data
    }
    onMounted(() => {
      getUserIdByToken()
    })
    return {
      ...state
    }
  }
})
</script>

<style lang="less">
.mine-wraper {
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  .mine-avatar {
    text-align: center;
    padding-top: 25px;
    background-color: hsl(210, 85%, 77%);
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
