<template>
  <div v-if="store.state.article.type == 'view'">
    <div v-html="formState.sentence"></div>
  </div>
  <a-form v-else ref="formRef" :model="formState" :label-col="labelCol" :rules="rules">
    <a-form-item name="title" label="文章标题">
      <a-input placeholder="请输入用户名" v-model:value="formState.title" />
    </a-form-item>
    <a-form-item name="author" label="文章作者">
      <a-input placeholder="请输入用户名" v-model:value="formState.author" />
    </a-form-item>
    <a-form-item name="sentence" label="文章内容">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor style="height: 500px; overflow-y: hidden" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />
    </a-form-item>
    <a-form-item name="status" label="发布状态">
      <a-radio-group name="radioGroup" v-model:value="formState.status">
        <a-radio :value="0">关闭</a-radio>
        <a-radio :value="1">开启</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item name="create_time" label="创建时间">
      <a-date-picker show-time v-model:value="formState.create_time" placeholder="请选择活动开始时间" />
    </a-form-item>
    <a-form-item name="publish_time" label="发布时间">
      <a-date-picker show-time v-model:value="formState.publish_time" placeholder="请选择活动开始时间" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { defineComponent, onMounted, ref, shallowRef, onBeforeUnmount } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useStore } from 'vuex'
import { ArticleManageType } from '@/interface/model/article'

export default defineComponent({
  name: 'AricleForm',
  components: { Editor, Toolbar },
  setup() {
    const store = useStore()
    const state = {
      mode: 'default',
      valueHtml: ref('<p>hello</p>'),
      editorRef: shallowRef(),
      toolbarConfig: {},
      editorConfig: {
        placeholder: '请输入内容...'
      },
      formRef: ref(),
      formState: ref<ArticleManageType.ArticleForm>(new ArticleManageType.ArticleForm()),
      fileList: ref([]),
      loading: ref<boolean>(false),
      labelCol: { style: { width: '120px' } },
      rules: {
        title: [{ required: true, message: '请输入文章标题' }],
        author: [{ required: true, message: '请输入作者名称' }],
        sentence: [{ required: true, message: '请输入文章内容' }],
        create_time: [{ required: true, message: '请选择创建时间' }],
        publish_time: [{ required: true, message: '请选择发布时间' }],
        status: [{ required: true, message: '请选择发布状态' }]
      }
    }
    const handleCreated = (editor: unknown) => {
      state.editorRef.value = editor // 记录 editor 实例，重要！
    }

    onMounted(() => {
      // 通过vuex来维护组件状态，根据条件来判断是否去覆盖form表单
      if (store.state.article.type == 'edit' || store.state.article.type == 'view') {
        state.formState.value = store.state.article.data
        setTimeout(() => {
          if (state.editorRef.value == null) return
          state.editorRef.value.setHtml(state.formState.value.sentence)
        }, 500)
      }
    })
    onBeforeUnmount(() => {
      const editor = state.editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    return {
      ...state,
      store,
      handleCreated
    }
  }
})
</script>

<style></style>
