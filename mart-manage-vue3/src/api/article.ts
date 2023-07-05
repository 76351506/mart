/*
 * @Author: heinan
 * @Date: 2023-06-25 17:17:33
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 16:31:19
 */
import { request } from '@/utils/request'
import { API_ARTICLE } from '@/config/api/article'
import { ArticleManageType } from '@/interface/model/article'
import { LoadingDecorator } from '@/utils/loading'

interface UseArticleServiceInterface {
  add(params: ArticleManageType.ArticleForm): Promise<any>
  delete(params: { aid: string }): Promise<any>
  edit(params: ArticleManageType.ArticleForm): Promise<any>
  list(): Promise<any>
}

export const useArticleService = (): UseArticleServiceInterface => {
  class ArticleService {
    @LoadingDecorator(true)
    public async add(params: ArticleManageType.ArticleForm) {
      console.log(params)
      const url = API_ARTICLE.add()
      return request
        .post(url, params)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    @LoadingDecorator(true)
    public async delete(params: { aid: string }) {
      const url = API_ARTICLE.del()
      return request
        .delete(url, {
          params
        })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
    @LoadingDecorator(true)
    public async edit(params: ArticleManageType.ArticleForm) {
      const url = API_ARTICLE.edit()
      return request
        .post(url, params)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }

    @LoadingDecorator(true)
    public list() {
      const url = API_ARTICLE.list()
      return request
        .get(url)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch(err => {
          console.error(err)
          return Promise.reject(err)
        })
    }
  }

  return new ArticleService()
}
