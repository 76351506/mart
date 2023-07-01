<template>
  <div class="pl15 pr15 pb15">
    <a-row>
      <a-col :span="4">
        <a-select placeholder="请选择一级品类" v-model:value="firstCategary" @change="onFirstCategaryChange">
          <a-select-option :value="first.t_type" v-for="first in firstCategaryList" :key="first.tid">
            {{ first.t_text }}
          </a-select-option>
        </a-select>
      </a-col>
      <a-col :span="4" :offset="16">
        <a-button type="primary" @click="openModel('add')">添加二级品类</a-button>
      </a-col>
    </a-row>
  </div>
  <a-table :columns="columns" :data-source="secondCategaryList" :rowKey="record => record.sid">
    <template #action="{ record }">
      <span>
        <a @click="openModel('edit', record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="onDelete(record.sid)">删除</a>
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
import { useSecondCategaryService } from '@/api/secondCategary'
import { CategaryManageType } from '@/interface/model/categary'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import CategaryForm from './form.vue'

export default defineComponent({
  name: 'SecondCategary',
  components: {
    CategaryForm
  },
  setup() {
    const store = useStore()
    const secondCategaryService = useSecondCategaryService()
    const firstCategaryService = useFirstCategaryService()
    const state = {
      formRef: ref(),
      firstCategary: ref<number>(0),
      firstCategaryList: ref<Array<CategaryManageType.FirsetCategary>>([]),
      secondCategaryList: ref<Array<CategaryManageType.SecondCategary>>([]),
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
          title: '二级品类名称',
          dataIndex: 's_text',
          key: 's_text'
        },
        {
          title: '二级品类类型',
          dataIndex: 's_type',
          key: 's_type'
        },
        {
          title: '父级品类',
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
    const getSecondCategaryList = async () => {
      const result = await secondCategaryService.list({ t_type: state.firstCategary.value })
      state.secondCategaryList.value = result.result
    }
    const openModel = (type: 'add' | 'edit', row?: CategaryManageType.SecondCategary) => {
      state.model.visible.value = true
      state.model.type.value = type
      state.model.title.value = type == 'add' ? '新建' : '编辑'
      store.commit({ type: 'categary/SECOND_CATEGARY_UPDATE', payload: { type, data: row } })
    }
    const onDelete = async (sid: string) => {
      const result = await secondCategaryService.delete({ sid })
      if (result.code) {
        message.success(result.msg, 1, () => {
          getSecondCategaryList()
        })
      } else {
        message.error(result.msg, 1, () => {
          getSecondCategaryList()
        })
      }
    }
    const update = async () => {
      const result =
        state.model.type.value == 'add'
          ? await secondCategaryService.add({ ...state.formRef.value.formState, t_type: state.firstCategary.value })
          : await secondCategaryService.update(state.formRef.value.formState)

      if (result.code) {
        message.success(result.msg, 1, () => {
          state.model.visible.value = false
          getSecondCategaryList()
        })
      } else {
        message.error(result.msg, 1, () => {
          state.formRef.value.formState.value = new CategaryManageType.SecondCategary()
          state.model.visible.value = false
        })
      }
    }
    const onFirstCategaryChange = (value: number) => {
      state.firstCategary.value = value
      getSecondCategaryList()
    }

    onMounted(() => {
      getFirstCategaryList()
      getSecondCategaryList()
    })
    return {
      ...state,
      openModel,
      onDelete,
      onFirstCategaryChange
    }
  }
})
</script>

<style></style>
