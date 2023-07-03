<template>
  <div class="categary-wraper">
    <div class="categary-left">
      <van-sidebar v-model="firstActive" @change="onChange">
        <van-sidebar-item v-for="firstCategary in firstCategaryList" :key="firstCategary.tid" :title="firstCategary.t_text" />
      </van-sidebar>
    </div>
    <div class="categary-right">
      <van-tabs :ellipsis="false" v-model:active="secondActive" @change="onClickTab">
        <van-tab v-for="secondCategary in secondCategaryList" :key="secondCategary.sid" :title="secondCategary.s_text">
          <div v-if="loading" :style="{ margin: '15% auto', textAlign: 'center' }">
            <van-loading></van-loading>
          </div>
          <div class="categary-empty" v-if="!productList.length && loading == false">
            <van-empty image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" image-size="80" description="暂无数据！" />
          </div>
          <van-card v-else v-for="product in productList" :key="product.pid" :price="product.sale_price" :desc="product.desc" :title="product.pname" :thumb="product.carousel">
            <template #tags>
              <van-space>
                <van-tag plain type="primary">原价：{{ product.original_price }}</van-tag>
                <van-divider />
                <van-tag plain type="primary">销量：{{ product.sales }}</van-tag>
              </van-space>
            </template>
          </van-card>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { UseCategaryService } from '@/api/categary'
import { CategaryManageType } from '@/interface/model/categary'
import { ProductManage } from '@/interface/model/product'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Categary',
  setup() {
    const store = useStore()
    const categaryService = UseCategaryService()
    const state = {
      loading: computed(() => store.state.app.loading),
      firstActive: ref<number>(0),
      secondActive: ref<number>(0),
      fristFlag: ref<number>(0),
      secondFlag: ref<number>(1),
      pagesize: ref<number>(100),
      pagecount: ref<number>(1),
      firstCategaryList: ref<Array<CategaryManageType.FirsetCategaryInterface>>([]),
      secondCategaryList: ref<Array<CategaryManageType.SecondCategaryInterface>>([]),
      productList: ref<Array<ProductManage.ProductInterface>>([])
    }
    // 一级分类列表
    const getFirstCategaryList = async () => {
      const result = await categaryService.firstCategaryList()
      state.firstCategaryList.value = result.result
    }
    // 二级分类列表
    const getSecondCategaryList = async () => {
      const result = await categaryService.secondCategaryList({ t_type: state.fristFlag.value })
      state.secondCategaryList.value = result.result
    }
    const getProductList = async () => {
      const params = {
        t_type: state.fristFlag.value,
        s_type: state.secondFlag.value,
        pagesize: state.pagesize.value,
        pagecount: state.pagecount.value
      }
      const result = await categaryService.getProductList(params)
      if (result.code) {
        state.productList.value = result.result
      } else {
        state.productList.value = []
      }
    }
    // 选择一级
    const onChange = async (index: number) => {
      // 将选中的一级分类的索引对应的数据t_type赋值给 fristFlag
      state.fristFlag.value = state.firstCategaryList.value[index].t_type
      // 选择一级品类后，获取二级品类列表
      await getSecondCategaryList()
      // 选择一级品类后，重置二级的tab为第一个
      state.secondActive.value = 0

      onClickTab(state.secondActive.value)
    }
    const onClickTab = (index: number) => {
      // 获取默认选中的二级分类的第一个s_type
      state.secondFlag.value = state.secondCategaryList.value[index].s_type
      // 一级品类的t_type与二级品类的s_type都有了
      getProductList()
    }
    // 为了确保请求结果的正确性
    onMounted(async () => {
      await getFirstCategaryList()
      await getSecondCategaryList()
      await getProductList()
    })
    return {
      ...state,
      onChange,
      onClickTab
    }
  }
})
</script>

<style lang="less">
.categary-wraper {
  display: flex;
  height: 100%;
  width: 100%;
  & > .categary-left {
    border-right: 1px solid #eee;
  }
  & > .categary-right {
    padding: 16px;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    .categary-empty {
      position: fixed;
      top: 25%;
      left: 35%;
    }
  }
}
</style>
