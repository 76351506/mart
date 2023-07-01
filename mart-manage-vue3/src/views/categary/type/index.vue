<template>
  <div>
    <a-button type="primary" @click="openModel('add')">添加一级品类</a-button>
  </div>
  <a-table :columns="columns" :data-source="firstCategaryList" :rowKey="record => record.tid">
    <template #action="{ record }">
      <span>
        <a @click="openModel('edit', record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="onDelete(record.tid)">删除</a>
      </span>
    </template>
  </a-table>
  <a-modal destroyOnClose v-model:visible="model.visible.value" :title="model.title.value" @ok="model.handleOk">
    <template #footer>
      <a-button key="back" @click="model.handleCancel">取消</a-button>
      <a-button key="submit" type="primary" @click="model.handleOk">
        {{ model.type.value == 'add' ? '添加' : '编辑' }}
      </a-button>
    </template>
    <CategaryForm ref="formRef"></CategaryForm>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useFirstCategaryService } from '@/api/firstCategary'
import { CategaryManageType } from '@/interface/model/categary'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import CategaryForm from './form.vue'

export default defineComponent({
  name: 'FristCategary',
  components: {
    CategaryForm
  },
  setup() {
    const store = useStore()
    const firstCategaryService = useFirstCategaryService()
    const state = {
      formRef: ref(),
      firstCategaryList: ref<Array<CategaryManageType.FirsetCategary>>([]),
      model: {
        type: ref<string>('add'),
        title: ref<string>('默认标题'),
        visible: ref<boolean>(false),
        handleOk: () => {
          state.formRef.value.formRef
            .validate()
            .then(() => {
              update()
            })
            .catch((err: any) => {
              console.error(err)
            })
        },
        handleCancel: () => {
          state.model.visible.value = false
        }
      },
      columns: [
        {
          title: '一级品类名称',
          dataIndex: 't_text',
          key: 't_text'
        },
        {
          title: '一级品类类型',
          dataIndex: 't_type',
          key: 't_type'
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' }
        }
      ]
    }
    const getFirstCategaryList = async () => {
      const result = await firstCategaryService.list()
      state.firstCategaryList.value = result.result
    }
    const openModel = (type: 'add' | 'edit', row?: CategaryManageType.FirsetCategary) => {
      state.model.visible.value = true
      state.model.type.value = type
      state.model.title.value = type == 'add' ? '新建' : '编辑'
      store.commit({ type: 'categary/FIRST_CATEGARY_UPDATE', payload: { type, data: row } })
    }
    const onDelete = async (tid: string) => {
      const result = await firstCategaryService.delete({ tid })
      if (result.code) {
        message.success(result.msg, 1, () => {
          getFirstCategaryList()
        })
      } else {
        message.error(result.msg, 1, () => {
          getFirstCategaryList()
        })
      }
    }
    const update = async () => {
      const result = state.model.type.value == 'add' ? await firstCategaryService.add(state.formRef.value.formState) : await firstCategaryService.update(state.formRef.value.formState)

      if (result.code) {
        message.success(result.msg, 1, () => {
          state.model.visible.value = false
          getFirstCategaryList()
        })
      } else {
        message.error(result.msg, 1, () => {
          state.formRef.value.formState.value = new CategaryManageType.FirsetCategary()
          state.model.visible.value = false
        })
      }
    }
    onMounted(() => {
      getFirstCategaryList()
    })
    return {
      ...state,
      openModel,
      onDelete
    }
  }
})
</script>

<style></style>
