// 导入组件，组件必须声明 name
import kkpie from './src/main'

// 为组件提供 install 安装方法，供按需引入
kkpie.install = function (Vue) {
    Vue.component(kkpie.name, kkpie)
}
// 默认导出组件
export default kkpie