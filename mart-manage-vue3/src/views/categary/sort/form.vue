<template>
  <a-form ref="formRef" :model="formState" :label-col="labelCol" :rules="rules">
    <a-form-item name="s_text" label="二级品类名称">
      <a-input placeholder="请输入二级品类名称" v-model:value="formState.s_text" />
    </a-form-item>
    <a-form-item name="s_type" label="二级品类类型">
      <a-input type="number" placeholder="请输入二级品类类型" v-model:value="formState.s_type" />
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
      firstCategaryList: ref<Array<CategaryManageType.SecondCategary>>([]),
      formState: ref<CategaryManageType.SecondCategary>(new CategaryManageType.SecondCategary()),
      labelCol: { style: { width: '150px' } },
      rules: {
        s_text: [{ required: true, message: '请输入二级品类名称' }],
        s_type: [{ required: true, message: '请输入二级品类类型' }]
      }
    }

    onMounted(() => {
      // 通过vuex来维护组件状态，根据条件来判断是否去覆盖form表单
      if (store.state.categary.type == 'edit') {
        state.formState.value = store.state.categary.secondCategary
      }
    })
    return {
      ...state
    }
  }
})
</script>

<style></style>
