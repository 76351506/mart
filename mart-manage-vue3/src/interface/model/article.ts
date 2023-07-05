/*
 * @Author: heinan
 * @Date: 2023-06-27 09:50:46
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 16:10:58
 */

export namespace ArticleManageType {
  export class ArticleForm {
    aid?: string | undefined
    title: string | undefined
    author: string | undefined
    create_time: string | undefined
    publish_time: string | undefined
    status: number = 0
    sentence: string | undefined
  }
}
