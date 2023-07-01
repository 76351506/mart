/*
 * @Author: heinan
 * @Date: 2021-07-31 10:29:49
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-04 11:57:09
 */

export const moduleCreator = function () {
  const modules = {};
  const context = require.context("@/store/model", false, /\.(js|ts)$/);
  const modelList = context.keys();
  modelList.forEach((model) => {
    const namespace = context(model).default.name;
    modules[namespace] = context(model).default;
  });
  return modules;
};

export const resolve = function (url) {
  return `/api/${url}`;
};

export const deepClone = function (obj) {
  var tmp = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (var i in obj) {
      var prop = obj[i]; // 避免相互引用造成死循环，如obj.a=obj
      if (prop == obj) {
        continue;
      }
      if (obj.hasOwnProperty(i)) {
        // 如果子属性为引用数据类型，递归复制
        if (prop && typeof prop === "object") {
          tmp[i] = prop.constructor === Array ? [] : {};
          arguments.callee(prop, tmp[i]); // 递归调用
        } else {
          // 如果是基本数据类型，只是简单的复制
          tmp[i] = prop;
        }
      }
    }
  }
  return tmp;
};
