<template>
  <footer class="footer">
    <van-tabbar v-model="active" route>
      <van-tabbar-item
        v-for="config in menuConfig"
        :to="config.path"
        :key="config.name"
        :icon="config.iconPath"
        >{{ config.name }}</van-tabbar-item
      >
    </van-tabbar>
    <!-- <dl v-for="config in state.menuConfig" :key="config.name">
      <dt>
        <van-icon v-if="config.iconPath" :name="config.iconPath" />
      </dt>
      <dd>
        <span v-text="config.name"></span>
      </dd>
    </dl> -->
  </footer>
</template>

<script>
import menuConfig from "@/config/menu.config";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      menuConfig,
    };
  },
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  & > dl {
    text-align: center;
    flex: 1;
    dt {
      font-size: 18px;
    }
    dd {
      font-size: 12px;
    }
  }
}
.van-tabbar-item--active {
  color: red;
}
</style>
>
