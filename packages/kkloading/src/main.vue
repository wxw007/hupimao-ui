<template>
        <div class="wrap" v-if="isShow">
            <div class="mask" v-if="!isTimeout">
                <div :class="['loading', 'icon-loading' + type]"></div>
                <p class="loading-text">{{text}}</p>
            </div>
             <div class="mask" v-else>
                <p class="loading-text timeout-text">{{text}}</p>
            </div>
        </div>
</template>
<script>
var timeout1 = null;
var timeout2 = null;
export default {
    name: "kkLoading",
    data() {
        return {
            isShow: false,
            text: "加载中",
            type: 1,
            isTimeout: false,
            flag: false, // 判断当前是否正在进行loading相关逻辑 ps: 因为有定时器, 重复触发会导致逻辑混乱
        }
    },
    methods:{
        showLoading(opt){
            if(this.flag){
                return
            }
            this.flag = true;
            this.isTimeout = false;
            opt = opt || {};
            this.text = opt.text || "加载中";
            this.type = opt.type || 1;
            this.isShow = true;
            timeout1 = setTimeout(() => {
                this.showTimeout()
            }, opt.time || 5000)
        },
        hide(){
           this.isShow = false;
           this.flag = false;
           if(timeout1){
               window.clearTimeout(timeout1)
           }
           if(timeout2){
               window.clearTimeout(timeout2)
           }
        },
        showTimeout(){
            this.text = "请求超时";
            this.isTimeout = true;
            timeout2 = setTimeout(() => {
                this.hide()
            }, 1000)
        }
    }
};
</script>
<style scoped>
@keyframes rotating {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(1turn);
    }
}
.wrap {
    position: fixed;
    top: 300px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
}
.mask {
    position: fixed;
    width: 30vw;
    height: 30vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.55);
    border-radius: 10px;
}
.loading {
    width: 24px;
    height: 24px;
    display: inline-block;
    font-size: 24px;
    animation: rotating 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12px;
    margin-top: -30px;
    color: #fff;
}
.loading::before {
    color: #fff;
    font-size: 24px;
}
.loading-text {
    text-align: center;
    color: #fff;
    margin-top: 60%;
    font-size: 14px;
}
.timeout-text{
    margin-top: 43%;
}
</style>