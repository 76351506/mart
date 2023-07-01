<template>
  <a-form ref="formRef" :model="formState" :label-col="labelCol" :rules="rules">
    <a-form-item name="t_text" label="品类名称">
      <a-input placeholder="请输入一级品类名称" v-model:value="formState.t_text" />
    </a-form-item>
    <a-form-item name="t_type" label="品类类型">
      <a-input type="number" placeholder="请输入一级品类类型" v-model:value="formState.t_type" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { CategaryManageType } from '@/interface/model/categary'

export default defineComponent({
  name: 'FirstCategaryForm',
  setup() {
    const store = useStore()
    const state = {
      formRef: ref(),
      firstCategaryList: ref<Array<CategaryManageType.FirsetCategary>>([]),
      formState: ref<CategaryManageType.FirsetCategary>(new CategaryManageType.FirsetCategary()),
      labelCol: { style: { width: '150px' } },
      rules: {
        t_text: [{ required: true, message: '请输入一级品类名称' }],
        t_type: [{ required: true, message: '请输入一级品类类型' }]
      }
    }

    onMounted(() => {
      // 通过vuex来维护组件状态，根据条件来判断是否去覆盖form表单
      if (store.state.categary.type == 'edit') {
        state.formState.value = store.state.categary.firstCategary
      }
    })
    return {
      ...state
    }
  }
})
</script>

<style></style>
