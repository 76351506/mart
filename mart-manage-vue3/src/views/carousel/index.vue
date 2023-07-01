<template>
  <div>
    <div>
      <a-button type="primary" @click="openModel('add')">添加</a-button>
    </div>
    <a-table :columns="columns" :data-source="carouselList" :rowKey="record => record.cid">
      <template #pic="{ text }">
        <a-image :width="35" :src="text">
          <template #placeholder>
            <a-image
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              :width="35"
              :preview="false"
            />
          </template>
        </a-image>
      </template>
      <template #startTime="{ text }">
        {{ moment(text).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
      <template #endTime="{ text }">
        {{ moment(text).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
      <template #action="{ record }">
        <span>
          <a @click="openModel('edit', record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="onDelete(record.cid)">删除</a>
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
      <CarouselForm ref="carouselFormRef"></CarouselForm>
    </a-modal>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent, onMounted, ref } from 'vue'
import { useCarouselService } from '@/api/carousel'
import { CarouselManageType } from '@/interface/model/carousel'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import CarouselForm from './form.vue'

export default defineComponent({
  name: 'CarouselManage',
  components: {
    CarouselForm
  },
  setup() {
    const store = useStore()
    const carouselService = useCarouselService()
    const state = {
      carouselFormRef: ref(),
      model: {
        type: ref<string>('add'),
        title: ref<string>('默认标题'),
        visible: ref<boolean>(false),
        handleOk: () => {
          state.carouselFormRef.value.formRef
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
          title: '轮播图片',
          dataIndex: 'img',
          key: 'img',
          slots: { customRender: 'pic' }
        },
        {
          title: '活动标题',
          dataIndex: 'tit',
          key: 'tit'
        },
        {
          title: '开始时间',
          dataIndex: 'start_time',
          key: 'start_time',
          slots: { customRender: 'startTime' }
        },
        {
          title: '结束时间',
          dataIndex: 'end_time',
          key: 'end_time',
          slots: { customRender: 'endTime' }
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' }
        }
      ],
      carouselList: ref<Array<CarouselManageType.CarouselForm>>([])
    }
    const getCarouselList = async () => {
      const result = await carouselService.getCarouselList()
      state.carouselList.value = result.result
    }
    const openModel = (type: 'add' | 'edit', row?: CarouselManageType.CarouselForm) => {
      state.model.visible.value = true
      state.model.type.value = type
      state.model.title.value = type == 'add' ? '新建' : '编辑'
      store.commit({ type: 'carousel/UPDATE', payload: { type, data: row } })
    }

    const onDelete = async (cid: string) => {
      const result = await carouselService.delete({ cid })
      if (result.code) {
        message.success(result.msg, 1, () => {
          getCarouselList()
        })
      } else {
        message.error(result.msg, 1, () => {
          getCarouselList()
        })
      }
    }

    // 添加轮播图
    const update = async () => {
      const result = state.model.type.value == 'add' ? await carouselService.add(state.carouselFormRef.value.formState) : await carouselService.edit(state.carouselFormRef.value.formState)

      if (result.code) {
        message.success(result.msg, 1, () => {
          state.model.visible.value = false
          getCarouselList()
        })
      } else {
        message.error(result.msg, 1, () => {
          state.carouselFormRef.value.formState.value = new CarouselManageType.CarouselForm()
          state.model.visible.value = false
        })
      }
    }

    onMounted(() => {
      getCarouselList()
    })
    return {
      ...state,
      moment,
      openModel,
      onDelete
    }
  }
})
</script>

<style></style>
