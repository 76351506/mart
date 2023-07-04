/*
 * @Author: heinan
 * @Date: 2023-07-04 18:20:12
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-04 18:22:42
 */

// @ts-nocheck
import themeColor from './themeColor'
import message from 'ant-design-vue/es/message'

// color Array
const colorList = [
  {
    key: '薄暮',
    color: '#F5222D'
  },
  {
    key: '火山',
    color: '#FA541C'
  },
  {
    key: '日暮',
    color: '#FAAD14'
  },
  {
    key: '明青',
    color: '#13C2C2'
  },
  {
    key: '极光绿',
    color: '#52C41A'
  },
  {
    key: '拂晓蓝（默认）',
    color: '#1890FF'
  },
  {
    key: '极客蓝',
    color: '#2F54EB'
  },
  {
    key: '酱紫',
    color: '#722ED1'
  }
]

// 更新主题方法
const updateTheme = newPrimaryColor => {
  //  这里可以写上切换loading 或者 提示等等
  const hideMessage = message.loading('正在切换主题！', 0)
  themeColor.changeColor(newPrimaryColor).finally(() => {
    // 切换成功后回调方法 这里可以关闭loading 或者 提示等等
    setTimeout(() => {
      hideMessage()
    }, 10)
  })
}

export { updateTheme, colorList }
