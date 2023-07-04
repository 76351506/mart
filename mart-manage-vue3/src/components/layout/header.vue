<template>
  <a-layout-header>
    <div class="text-right pr15">
      <a-space>
        <a-switch checked-children="日" un-checked-children="夜" v-model:checked="checked" @change="onThemeChange" />
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar>
              <template #icon>
                <UserOutlined v-if="!avatar" />
                <img :src="avatar" alt="" />
              </template>
            </a-avatar>
            <MenuIcon iconType="DownOutlined"></MenuIcon>
          </a>
          <template #overlay>
            <a-menu mode="vertical-right">
              <a-menu-item>
                <router-link to="/user/info">用户信息</router-link>
              </a-menu-item>
              <a-menu-item>
                <a-button type="link" @click="() => emit('onQuit')">退出</a-button>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-space>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { darkThemeSwitch } from '@/utils/theme'

export default defineComponent({
  name: 'LayoutHeader',
  components: {
    UserOutlined
  },
  setup(props, { emit }) {
    const store = useStore()
    const state = {
      checked: ref<boolean>(true),
      avatar: computed(() => store.state.user.userInfo.avatar)
    }
    const onThemeChange = (value: boolean) => {
      // store.commit({ type: 'app/UPDATE_THEME', payload: value })
      darkThemeSwitch()
    }
    return {
      ...state,
      store,
      emit,
      onThemeChange
    }
  }
})
</script>

<style lang="less" scoped>
a,
.ant-btn-link {
  color: #333 !important;
}
.ant-image img {
  height: 100% !important;
}
</style>
