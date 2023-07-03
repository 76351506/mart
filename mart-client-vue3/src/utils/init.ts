/*
 * @Author: heinan
 * @Date: 2023-06-29 16:18:32
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 11:03:17
 */
import 'vant/lib/index.css'
import {
  Tab,
  Tabs,
  Form,
  Field,
  CellGroup,
  Button,
  Space,
  Tag,
  Toast,
  Notify,
  Col,
  Row,
  List,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Loading,
  Card,
  Divider,
  Sidebar,
  SidebarItem,
  Empty
} from 'vant'

export const initVant = function (app: any) {
  app.use(Tab)
  app.use(Tabs)
  app.use(Form)
  app.use(Field)
  app.use(CellGroup)
  app.use(Button)
  app.use(Space)
  app.use(Tag)
  app.use(Toast)
  app.use(Notify)
  app.use(Col)
  app.use(Row)
  app.use(List)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(VanImage)
  app.use(Loading)
  app.use(Card)
  app.use(Divider)
  app.use(Sidebar)
  app.use(SidebarItem)
  app.use(Empty)
}
