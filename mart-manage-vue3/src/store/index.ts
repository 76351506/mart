/*
 * @Author: heinan
 * @Date: 2023-06-24 16:14:21
 * @Last Modified by: heinan
 * @Last Modified time: 2023-06-27 20:29:32
 */
import { createStore } from 'vuex'
import { BasicTypeInterface } from '@/interface/model/common'
import { CommitInterface } from '@/interface/store'

const createModule = (): BasicTypeInterface.Data<CommitInterface<string>> => {
  // 通过require.context获取目录下的ts文件集
  const context = require.context('./modules', true, /\.ts|js$/)
  const modules: BasicTypeInterface.Data<CommitInterface<string>> = {}
  // 获取文件集的[key1,key2,...keyn]遍历
  context.keys().forEach(key => {
    const moduleName: string = key.replace(/^\.\/(.*)\.\w+$/, '$1')
    const moduleContext = context(key).default
    modules[moduleName] = moduleContext
  })
  return modules
}

const store = createStore({
  modules: createModule()
})

export default store
