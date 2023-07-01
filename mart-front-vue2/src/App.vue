<template>
  <Layout>
    <router-view />
  </Layout>
</template>
<script>
import Layout from "@/components/layout";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
  },
  name: "App",
});
</script>

<style lang="scss">
body,
html,
#app {
  width: 100%;
  height: 100%;
}
</style>
