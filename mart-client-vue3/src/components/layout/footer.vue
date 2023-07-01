<template>
  <footer class="layout-footer">
    <van-tabbar :fixed="false" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/categary" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/shopcart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutFooter'
})
</script>

<style lang="less"></style>
