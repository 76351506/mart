/*
 * @Author: heinan
 * @Date: 2021-08-03 16:45:12
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-03 16:47:55
 */
/*
 * @Author: heinan
 * @Date: 2021-08-03 16:29:35
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-03 16:45:09
 */
import vantPluginList from "@/config/vantPlugin";
import "vant/lib/index.css";

const plugin = {
  install(app) {
    vantPluginList.forEach((plugin) => {
      const comp = require("vant")[plugin];
      app.use(comp);
    });
  },
};
export default plugin;
