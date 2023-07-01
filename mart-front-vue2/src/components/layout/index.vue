<template>
  <div class="wraper">
    <Header></Header>
    <div class="content">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
@import url("../../assets/css/reset.css");
@import url("../../assets/css/common.css");
@import url("../../assets/css/style.css");
</style>
