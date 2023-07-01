<template>
  <div>
    <div>
      <a-button type="primary" @click="openModel('add')">添加</a-button>
    </div>
    <a-table :columns="columns" :data-source="carouselList" :rowKey="record => record.pid">
      <template #carousel="{ text }">
        <a-image :src="text" class="upload-image">
          <template #placeholder>
            <a-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200" :preview="false" />
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
          <a @click="onDelete(record.pid)">删除</a>
        </span>
      </template>
    </a-table>
    <a-modal :width="550" destroyOnClose v-model:visible="model.visible.value" :title="model.title.value" @ok="model.handleOk">
      <template #footer>
        <a-button key="back" @click="model.handleCancel">取消</a-button>
        <a-button key="submit" type="primary" @click="model.handleOk">
          {{ model.type.value == 'add' ? '添加' : '编辑' }}
        </a-button>
      </template>
      <a-row>
        <a-col :span="20">
          <GoodsForm ref="FormRef"></GoodsForm>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent, onMounted, ref } from 'vue'
import { UseGoodsService } from '@/api/goods'
import { GoodsManageType } from '@/interface/model/goods'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import GoodsForm from './form.vue'

export default defineComponent({
  name: 'GoodsManage',
  components: {
    GoodsForm
  },
  setup() {
    const store = useStore()
    const goodsService = UseGoodsService()
    const state = {
      FormRef: ref(),
      model: {
        type: ref<string>('add'),
        title: ref<string>('默认标题'),
        visible: ref<boolean>(false),
        handleOk: () => {
          state.FormRef.value.formRef
            .validate()
            .then(() => {
              onUpdate()
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
          title: '商品名称',
          dataIndex: 'pname',
          key: 'pname'
        },
        {
          title: '商品图片',
          dataIndex: 'carousel',
          key: 'carousel',
          slots: { customRender: 'carousel' }
        },

        {
          title: '商品销量',
          dataIndex: 'sales',
          key: 'sales'
        },
        {
          title: '原价',
          dataIndex: 'original_price',
          key: 'original_price'
        },
        {
          title: '现价',
          dataIndex: 'sale_price',
          key: 'sale_price'
        },
        {
          title: '经营模式',
          dataIndex: 'mode',
          key: 'mode'
        },
        {
          title: '二级分类',
          dataIndex: 's_type',
          key: 's_type'
        },
        {
          title: '一级分类',
          dataIndex: 't_type',
          key: 't_type'
        },
        {
          title: '商品描述',
          dataIndex: 'desc',
          key: 'desc'
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' }
        }
      ],
      carouselList: ref<Array<GoodsManageType.GoodsForm>>([])
    }
    const getCarouselList = async () => {
      const result = await goodsService.list()
      state.carouselList.value = result.result
    }
    const openModel = (type: 'add' | 'edit', row?: GoodsManageType.GoodsForm) => {
      state.model.visible.value = true
      state.model.type.value = type
      state.model.title.value = type == 'add' ? '新建' : '编辑'
      store.commit({ type: 'goods/UPDATE', payload: { type, data: row } })
    }

    const onDelete = async (pid: string) => {
      const result = await goodsService.delete({ pid })
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

    const onUpdate = async () => {
      const result = state.model.type.value == 'add' ? await goodsService.add(state.FormRef.value.formState) : await goodsService.edit(state.FormRef.value.formState)

      if (result.code) {
        message.success(result.msg, 1, () => {
          state.model.visible.value = false
          getCarouselList()
        })
      } else {
        message.error(result.msg, 1, () => {
          state.FormRef.value.formState.value = new GoodsManageType.GoodsForm()
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
      onDelete,
      onUpdate,
      GoodsManageType
    }
  }
})
</script>

<style lang="less">
.upload-image {
  width: 30px;
  height: 30px;
  & > img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
