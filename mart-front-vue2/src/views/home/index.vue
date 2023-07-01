<template>
  <div>
    <van-swipe
      class="swipe-wraper"
      :autoplay="3000"
      lazy-render
      indicator-color="red"
    >
      <van-swipe-item v-for="list in state.carouselList" :key="list.cid">
        <img class="img-responsive" :src="list.img" :alt="list.tit" />
      </van-swipe-item>
    </van-swipe>

    <van-tabs v-model:active="current" @change="onChange">
      <van-tab
        v-for="list in state.sortTypeList"
        :key="list.s_type"
        :title="list.s_text"
        :name="list.s_type"
      >
        <van-list
          v-model:loading="state.loading"
          :finished="state.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-card
            v-for="list in state.rankList"
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
              <van-button size="mini">加入购物车</van-button>
              |
              <van-button size="mini">收藏</van-button>
            </template>
          </van-card>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { _getCarouselList, _getSortTypeList, _getRankList } from "@/api/home";

export default defineComponent({
  name: "Home",
  data() {
    return {};
  },
  setup() {
    const current = ref("0");
    const state = reactive({
      pagesize: 5,
      pagecount: 1,
      loading: false,
      finished: false,
      carouselList: [],
      sortTypeList: [],
      rankList: [],
    });
    const getCarouselList = async function () {
      const result = await _getCarouselList();
      state.carouselList = result.data.result;
    };
    const getSortTypeList = async function (sType) {
      const result = await _getSortTypeList(sType);
      state.sortTypeList = result.data.result;
    };
    const onChange = async () => {
      const sType = current.value;
      const result = await _getRankList(sType, state.pagesize, state.pagecount);
      state.rankList = result.data.result;
    };
    const onLoad = async function () {
      state.loading = true;
      const result = await _getRankList(
        current.value,
        state.pagesize,
        ++state.pagecount
      );
      state.loading = false;
      if (result.data.result.length) {
        state.rankList = [...state.rankList, ...result.data.result];
      } else {
        state.finished = true;
        console.log("暂无更多数据");
      }
    };
    onMounted(() => {
      getCarouselList();
      getSortTypeList();
    });

    return {
      current,
      state,
      onChange,
      onLoad,
      // beforeChange,
    };
  },
});
</script>

<style>
.swipe-wraper {
  height: 180px;
  background-color: #dec;
}
.img-responsive {
  height: 100%;
  width: 100%;
}
</style>
