import Vue from "vue"
import kkLoading from './src/main'
const v = new Vue({
    render(createElement){
        return createElement(kkLoading) 
    }
})
v.$mount() //渲染
 
document.body.appendChild(v.$el) //挂载
const load = v.$children[0]

//显示loading弹窗
function showLoading(opt){
    load.showLoading(opt)
}

function hideLoading(){
    load.hide()
}
export default {
    showLoading,
    install(v){
        v.prototype.$kkLoading = showLoading;
        v.prototype.$hideLoading = hideLoading;
    }
}