// @ts-nocheck
import { createStore } from 'vuex'
import { CommitInterface } from '@/interface/store'

// 读取modules文件中的内容，并通过require.context读取文件组成完成的 vuex-modules
const moduleCreator = function () {
  const modules: BasicManageType.Data<CommitInterface<string>> = {}
  const context = require.context('./modules', true, /\.ts|js$/)
  const files = context.keys().map(key => context(key))
  files.forEach(file => {
    modules[file.default.name] = file.default
  })
  return modules
}

export default createStore({
  modules: moduleCreator()
})
