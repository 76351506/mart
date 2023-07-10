<template>
  <a-form ref="formRef" :model="formState" :label-col="labelCol" :rules="rules">
    <a-form-item name="tit" label="活动标题">
      <a-input placeholder="请输入用户名" v-model:value="formState.tit" />
    </a-form-item>
    <a-form-item name="img" label="图片">
      <a-upload v-model:file-list="fileList" :show-upload-list="false" name="avatar" list-type="picture-card" :before-upload="beforeUpload" class="avatar-uploader" @change="handleChange">
        <a-image v-if="formState.img" style="width: 50px" :src="formState.img" />
        <div v-else>
          <loading-outlined v-if="loading"></loading-outlined>
          <plus-outlined v-else></plus-outlined>
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
    </a-form-item>
    <a-form-item name="type" label="投放开关">
      <a-radio-group name="radioGroup" v-model:value="formState.type">
        <a-radio :value="0">关闭</a-radio>
        <a-radio :value="1">开启</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item name="start_time" label="活动开始时间">
      <a-date-picker show-time v-model:value="formState.start_time" placeholder="请选择活动开始时间" />
    </a-form-item>
    <a-form-item name="end_time" label="活动开始时间">
      <a-date-picker show-time v-model:value="formState.end_time" placeholder="请选择活动开始时间" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useUserService } from '@/api/user'
import { useStore } from 'vuex'
import { CarouselManageType } from '@/interface/model/carousel'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'NotFound',
  components: {
    LoadingOutlined,
    PlusOutlined
  },
  setup(props) {
    const store = useStore()
    const userService = useUserService()
    const state = {
      formRef: ref(),
      formState: ref<CarouselManageType.CarouselForm>(new CarouselManageType.CarouselForm()),
      fileList: ref([]),
      loading: ref<boolean>(false),
      labelCol: { style: { width: '150px' } },
      rules: {
        tit: [{ required: true, message: '请输入标题' }],
        img: [{ required: true, message: '请上传图片' }],
        type: [{ required: true, message: '请选择投放类型' }],
        start_time: [{ required: true, message: '请选择活动开始时间' }],
        end_time: [{ required: true, message: '请选择活动结束时间' }]
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
      state.formState.value.img = result.imgurl
      state.formRef.value.clearValidate('img')
    }
    onMounted(() => {
      // 通过vuex来维护组件状态，根据条件来判断是否去覆盖form表单
      if (store.state.carousel.type == 'edit') {
        state.formState.value = store.state.carousel.data
      }
    })
    return {
      ...state,
      beforeUpload,
      handleChange
    }
  }
})
</script>

<style></style>
