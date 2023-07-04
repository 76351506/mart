/*
 * @Author: heinan
 * @Date: 2023-06-27 15:38:54
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 19:10:05
 */
import { AppManageType } from '@/interface/model/app'

const menuConfig: Array<AppManageType.MenuItemForSider> = [
  {
    key: 'sub1',
    icon: 'UserOutlined',
    title: '用户管理',
    // name: 'UserManage',
    children: [
      {
        icon: 'BranchesOutlined',
        key: 'userIdentity',
        title: '身份权限',
        name: 'UserIdentity'
      },
      {
        icon: 'IdcardOutlined',
        key: 'userInfo',
        title: '用户信息',
        name: 'UserInfo'
      },
      {
        icon: 'UserOutlined',
        key: 'userList',
        title: '用户列表',
        name: 'UserList',
        children: [
          {
            icon: 'UserOutlined',
            key: 'userList',
            title: '所有用户',
            name: 'UserList'
          }
        ]
      }
    ]
  },
  {
    key: 'sub2',
    icon: 'PictureOutlined',
    // name: 'CarouselManage',
    title: '焦点图管理',
    children: [
      {
        icon: 'PictureOutlined',
        key: 'carousel',
        name: 'CarouselManage',
        title: '焦点图列表'
      }
    ]
  },
  {
    key: 'sub3',
    icon: 'BarsOutlined',
    // name: 'CategaryManage',
    title: '分类管理',
    children: [
      {
        icon: 'FilterOutlined',
        key: 'typeCategaryManage',
        name: 'TypeCategaryManage',
        title: '一级品类'
      },
      {
        icon: 'FilterOutlined',
        key: 'sortCategaryManage',
        name: 'SortCategaryManage',
        title: '二级品类'
      }
    ]
  },
  {
    key: 'sub4',
    icon: 'ShopOutlined',
    // name: 'GoodsManage',
    title: '商品管理',
    children: [
      {
        icon: 'ShopOutlined',
        key: 'goods',
        name: 'GoodsManage',
        title: '商品列表'
      }
    ]
  },
  {
    key: 'sub5',
    icon: 'DeploymentUnitOutlined',
    title: '数据可视化',
    children: [
      {
        icon: 'PieChartOutlined',
        key: 'pieCharts',
        name: 'PieCharts',
        title: '饼图'
      },
      {
        icon: 'BarChartOutlined',
        key: 'barCharts',
        name: 'BarCharts',
        title: '柱状图'
      },
      {
        icon: 'LineChartOutlined',
        key: 'lineCharts',
        name: 'LineCharts',
        title: '折线图'
      }
    ]
  }
]

export default menuConfig
