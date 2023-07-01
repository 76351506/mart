<template>
  <div class="child-wraper">
    <h3>页面没有找到</h3>
    <img :src="require('@/assets/images/404.webp')" alt="" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound",
});
</script>

<style>
@import url("./404.css");
</style>
