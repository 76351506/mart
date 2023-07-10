<template>
  <div>
    <a-button type="primary" @click="openModel('add')">添加</a-button>
    <a-table :columns="columns" :data-source="articleList" :rowKey="record => record.aid">
      <template #status="{ text }">
        <span>
          {{ text == 0 ? '未发布' : '已发布' }}
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a @click="openModel('view', record)">查看</a>
          <a-divider type="vertical" />
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
      <AricleForm ref="aricleForm"></AricleForm>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { useArticleService } from '@/api/article'
import { defineComponent, onMounted, ref } from 'vue'
import { ArticleManageType } from '@/interface/model/article'
import { message } from 'ant-design-vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import AricleForm from './form.vue'

export default defineComponent({
  name: 'AricleList',
  components: {
    AricleForm
  },
  setup() {
    const articleService = useArticleService()
    const store = useStore()
    const state = {
      aricleForm: ref(),
      model: {
        type: ref<string>('add'),
        title: ref<string>('默认标题'),
        visible: ref<boolean>(false),
        handleOk: () => {
          state.aricleForm.value.formRef
            .validate()
            .then(async () => {
              const result = await articleService.edit(state.aricleForm.value.formState)
              console.log(result)
              if (result.code) {
                message.success(result.msg, 1, () => {
                  state.model.visible.value = false
                })
              }
            })
            .catch((err: ValidateErrorEntity<ArticleManageType.ArticleForm>) => {
              console.error(err)
            })
        },
        handleCancel: () => {
          state.model.visible.value = false
        }
      },
      pagesize: ref<number>(0),
      pagecount: ref<number>(5),
      columns: [
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: '作者',
          dataIndex: 'author',
          key: 'author'
        },
        {
          title: '创建时间',
          dataIndex: 'create_time',
          key: 'create_time'
          // slots: { customRender: 'startTime' }
        },
        {
          title: '发布时间',
          dataIndex: 'publish_time',
          key: 'publish_time'
          // slots: { customRender: 'endTime' }
        },
        {
          title: '发布状态',
          dataIndex: 'status',
          key: 'status',
          slots: { customRender: 'status' }
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' }
        }
      ],
      articleList: ref<Array<ArticleManageType.ArticleForm>>([])
    }
    const getArticleList = async () => {
      const result = await articleService.list()
      console.log(result)
      state.articleList.value = result.result
    }
    const openModel = (type: 'add' | 'edit', row?: ArticleManageType.ArticleForm) => {
      state.model.visible.value = true
      state.model.type.value = type
      state.model.title.value = type == 'add' ? '新建' : '编辑'
      store.commit({ type: 'article/UPDATE', payload: { type, data: row } })
    }
    onMounted(() => {
      getArticleList()
    })
    return {
      ...state,
      openModel
    }
  }
})
</script>

<style></style>
