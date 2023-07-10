<template>
  <a-form ref="formRef" :model="formState" :label-col="labelCol" :rules="rules">
    <a-form-item name="pname" label="商品名称">
      <a-input placeholder="请输入商品名称" v-model:value="formState.pname" />
    </a-form-item>
    <a-form-item name="carousel" label="图片">
      <a-upload v-model:file-list="fileList" :show-upload-list="false" name="avatar" list-type="picture-card" :before-upload="beforeUpload" class="avatar-uploader" @change="handleChange">
        <a-image v-if="formState.carousel" style="width: 50px" :src="formState.carousel" />
        <div v-else>
          <loading-outlined v-if="loading"></loading-outlined>
          <plus-outlined v-else></plus-outlined>
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
    </a-form-item>
    <a-form-item name="sales" label="商品销量">
      <a-input placeholder="请输入商品销量" v-model:value="formState.sales" />
    </a-form-item>
    <a-form-item name="original_price" label="原价">
      <a-input placeholder="请输入商品销量" v-model:value="formState.original_price" />
    </a-form-item>
    <a-form-item name="sale_price" label="现价">
      <a-input placeholder="请输入商品销量" v-model:value="formState.sale_price" />
    </a-form-item>
    <a-form-item name="mode" label="经营模式">
      <a-select v-model:value="formState.mode">
        <a-select-option value="">请选择</a-select-option>
        <a-select-option value="直销">直销</a-select-option>
        <a-select-option value="代理商">代理商</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item name="t_type" label="一级分类">
      <a-select v-model:value="formState.t_type" @change="onTTypeChange">
        <a-select-option value="">请选择</a-select-option>
        <a-select-option :value="t.t_type" v-for="t in typeList" :key="t.tid">
          {{ t.t_text }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item name="s_type" label="二级分类">
      <a-select v-model:value="formState.s_type">
        <a-select-option value="">请选择</a-select-option>
        <a-select-option :value="stype.s_type" v-for="(stype, key) in sortList" :key="key">
          {{ stype.s_text }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item name="desc" label="商品描述">
      <a-textarea v-model:value="formState.desc" placeholder="请输入商品描述" :rows="4" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useUserService } from '@/api/user'
import { useStore } from 'vuex'
import { GoodsManageType } from '@/interface/model/goods'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { useFirstCategaryService } from '@/api/firstCategary'
import { useSecondCategaryService } from '@/api/secondCategary'
import { CategaryManageType } from '@/interface/model/categary'

export default defineComponent({
  name: 'NotFound',
  components: {
    LoadingOutlined,
    PlusOutlined
  },
  setup(props) {
    const store = useStore()
    const userService = useUserService()
    const firstCategaryService = useFirstCategaryService()
    const secondCategaryService = useSecondCategaryService()
    const state = {
      formRef: ref(),
      formState: ref<GoodsManageType.GoodsForm>(new GoodsManageType.GoodsForm()),
      typeList: ref<Array<CategaryManageType.FirsetCategary>>([]),
      sortList: ref<Array<CategaryManageType.SecondCategary>>([]),
      fileList: ref([]),
      loading: ref<boolean>(false),
      labelCol: { style: { width: '150px' } },
      rules: {
        pname: [{ required: true, message: '请输入标题' }],
        imgUrl: [{ required: true, message: '请上传图片' }],
        sales: [{ required: true, message: '请选择投放类型' }],
        original_price: [{ required: true, message: '请选择活动开始时间' }],
        sale_price: [{ required: true, message: '请选择活动结束时间' }],
        mode: [{ required: true, message: '请选择活动结束时间' }],
        s_type: [{ required: true, message: '请选择活动结束时间' }],
        t_type: [{ required: true, message: '请选择活动结束时间' }],
        desc: [{ required: true, message: '请选择活动结束时间' }]
      }
    }
    // 返回false 手动上传
    const beforeUpload = () => {
      return false
    }
    // 上传文件的回调
    const handleChange = async (info: { file: File }) => {
      const formData = new FormData()
      formData.append('file', info.file)
      const result = await userService.upload(formData, store.state.user.uid)
      // 表单项中参数不同导致表单校验不通过的，可以通过手动维护
      state.formState.value.carousel = result.imgurl
      state.formRef.value.clearValidate('carousel')
    }
    const onTTypeChange = (value: number) => {
      getSortList(value)
    }
    const getTypeList = async () => {
      const result = await firstCategaryService.list()
      state.typeList.value = result.result
      console.log(state.typeList.value)
    }
    const getSortList = async (t_type: number) => {
      const result = await secondCategaryService.list({ t_type })
      state.sortList.value = result.result
      console.log(state.sortList.value)
    }
    onMounted(() => {
      // 通过vuex来维护组件状态，根据条件来判断是否去覆盖form表单
      if (store.state.goods.type == 'edit') {
        state.formState.value = store.state.goods.data
      }
      getTypeList()
    })
    return {
      ...state,
      beforeUpload,
      handleChange,
      onTTypeChange
    }
  }
})
</script>

<style></style>
