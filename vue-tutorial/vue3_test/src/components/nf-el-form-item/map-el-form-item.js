import { defineAsyncComponent } from 'vue'

/**
 * 组件里面注册控件用
 * * 文本
 * ** el-form-text 单行文本、电话、邮件、搜索
 * ** el-form-area 多行文本
 * ** el-form-password 密码
 * ** el-form-url
 * * 数字
 * ** el-form-number 数字
 * ** el-form-range 滑块
 * * 日期
 * ** el-form-date 日期、年月、年周、年
 * ** el-form-time 时间
 * * 选择
 * ** el-form-checkbox 勾选
 * ** el-form-switch 开关
 * ** el-form-checkboxs 多选组
 * ** el-form-radios 单选组
 * ** el-form-select 下拉选择
 */
export const formItemList = {
  'el-form-url': defineAsyncComponent(() => import('./t-url.vue')),
  'el-form-password': defineAsyncComponent(() => import('./t-password.vue'))
}

/**
 * 动态组件的字典，便于v-for循环里面设置控件
 */
export const formItemListKey = {
  102: formItemList['el-form-password'], // 密码
  105: formItemList['el-form-url'] // url
}

// const keyControl = {
//  100: 'el-form-area',
//  101: 'el-form-text'
// }

export function formItemComponents () {
  const com = {
    'el-form-password': defineAsyncComponent(() => import('./t-password.vue')),
    'el-form-url': defineAsyncComponent(() => import('./t-url.vue')),
  }

  // console.log(keyControl)
  // alert('动态加载组件')
  /**
   * 需要一个编号，一个标签，一个动态注册的方法
   * 类型：加载全局注册的组件；加载动态加载的组件
   const aa = {
    key: 500,
    biaoqian: 'input',
    kind: 1, //
    com: {
      'input-1': 'aa'
    }
  }
  // console.log(aa)
  */

  // const canshu = inject('sysCom')
  // if (typeof canshu !== 'undefined') {
  //   console.log(canshu)
  // }
  return com
}
