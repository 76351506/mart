<template>
  <div class="layout-wraper">
    <!-- 判断当前路由是否在layout白名单，在白名单直接渲染，否则使用Layou组件渲染 -->
    <section v-if="inLayoutWhiteList">
      <router-view />
    </section>
    <section v-else class="layout-container">
      <!-- 头部 -->
      <LayoutHeader>
        <template #head>校园超市</template>
      </LayoutHeader>
      <!-- 身体 -->
      <div class="layout-content">
        <router-view />
      </div>
      <!-- 页脚 -->
      <LayoutFooter></LayoutFooter>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { LayoutWhiteList } from '@/config'
import LayoutHeader from '@/components/layout/header.vue'
import LayoutFooter from '@/components/layout/footer.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutFooter
  },
  setup() {
    const route = useRoute()
    const state = {
      layoutWhiteList: ref<Array<string>>(LayoutWhiteList)
    }
    const inLayoutWhiteList = computed(() => state.layoutWhiteList.value.includes(route.path))
    return {
      ...state,
      inLayoutWhiteList
    }
  }
})
</script>

<style lang="less">
.layout-wraper {
  height: 100%;
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  .layout-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    & > .layout-header {
      color: #333;
      text-align: center;
      font-size: 18px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;
    }
    & > .layout-content {
      flex: 1;
      overflow-y: scroll;
    }
    & > .layout-footer {
      height: 50px;
    }
  }
}
</style>
