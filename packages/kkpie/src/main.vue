<template>
      <div class="box" :style="boxStyle">
          <div class="pie" :style="pieStyle"></div>
      </div>
</template>
<script>
export default {
    name: "kkpie",
    props: {
        width: {
            type: String,
            default: "300px"
        },
        height: {
            type: String,
            default: "300px"
        },
        bgColor: {
            type: String,
            default: "yellowgreen"
        },
        innerColor: {
            type: String,
            default: "#aaa"
        },
        percent: {
            type: String,
            default: "0.1",
        }
    },
    computed: {
        rotateTurn(){
            const N = 1000;
            let percent = this.percent - 0;
            let turn = ((percent * N) % (1 * N)) / N;
            let rotate = ((turn * N) % (0.5 * N)) / N;
            return rotate
        },
        pieColor(){
            let color = this.bgColor;
            if((this.percent - 0) > 0.5){
                color = this.innerColor
            }
            return color
        },
        boxStyle(){
            let obj = {};
            obj.width = this.width;
            obj.height = this.height;
            obj.background = this.bgColor;
            obj.backgroundImage = `linear-gradient(to right, transparent 50%, ${this.innerColor} 0)`
            return obj;
        },
        pieStyle(){
            let obj = {};
            obj.backgroundColor = this.pieColor;
            obj.transform = `rotate(${this.rotateTurn}turn)`
            return obj
        },
        
    },
};
</script>
<style scoped>
.box{
    border-radius: 50%;
}
.box .pie {
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0/50%;
    transform-origin: left;
}
 
</style>