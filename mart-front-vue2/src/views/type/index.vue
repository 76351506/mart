<template>
  <div>
    this type page

    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="100%"
      :items="state.typeList"
      @click-nav="handlerClick"
    >
      <template #content>
        <van-tabs v-model:active="tabActive" scrollspy sticky>
          <van-tab
            v-for="list in state.sortList"
            :key="list.s_type"
            :title="list.s_text"
          >
            <van-card
              v-for="list in state.productList"
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
                <van-button size="mini" @click="addCart(list)"
                  >加入购物车</van-button
                >
                |
                <van-button size="mini">收藏</van-button>
              </template>
            </van-card>
          </van-tab>
        </van-tabs>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { _getTypeList, _getSortList, _getProduction } from "@/api/type";

export default {
  name: "Type",
  setup() {
    const store = useStore();
    const cartList = computed(() => store.state.cart.cartList);
    const state = reactive({
      tType: 0,
      sType: 0,

      typeList: [],
      sortList: [],
      productList: [],
    });
    const activeIndex = ref(0);
    const tabActive = ref(0);
    const getTypeList = async function () {
      const result = await _getTypeList();
      state.typeList = result.data.result.map((typeList) => {
        return {
          ...typeList,
          text: typeList.t_text,
        };
      });
      state.tType = state.typeList[0].t_type;
      getSortList();
    };
    const getSortList = async function () {
      const result = await _getSortList(state.tType);
      state.sortList = result.data.result;
      state.sType = state.sortList[0].s_type;
      getProductList();
    };
    const getProductList = async function () {
      const result = await _getProduction(state.sType);
      state.productList = result.data.result;
    };
    const handlerClick = async function (ind) {
      state.tType = state.typeList[ind].t_type;
      getSortList();
    };
    const addCart = async function (payload) {
      store.dispatch("cart/ADD_CARTLIST", payload);
    };
    onMounted(() => {
      console.log(cartList);
      getTypeList();
    });
    return {
      state,
      cartList,
      tabActive,
      addCart,
      activeIndex,
      handlerClick,
    };
  },
};
</script>

<style></style>
