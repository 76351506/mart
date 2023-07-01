<template>
  <div>
    this cart page
    <van-card
      v-for="list in cartList"
      :key="list.pid"
      :num="list.sales"
      :price="list.sale_price"
      :desc="list.desc"
      :title="list.pname"
    >
      <template #thumb>
        <img class="img-responsive" v-lazy="list.imgUrl" alt="" />
      </template>
      <template #footer>
        <van-button size="mini">-</van-button>
        <span v-text="list.count"></span>
        <van-button size="mini">+</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Cart",
  setup() {
    const store = useStore();
    const cartList = computed(() => store.state.cart.cartList);
    return {
      cartList,
    };
  },
};
</script>

<style></style>
