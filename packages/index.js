import kkpie from "./kkpie/index"
import kkLoading from './kkloading/index'

const components = [
    kkpie,
    kkLoading
]

const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    components.map(component => {
        if(component.install){
            component.install(Vue)
        } else {
            Vue.component(component.name, component)
        }
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // ...components
}