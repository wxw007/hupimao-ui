<template>
  <div class="hello">
    <!-- <kkpie percent="0.4"/> -->
    <!-- <kkLoading /> -->
    <button @click="aa">加载</button>
    <button @click="bb" >删除</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    console.log(456)
  },
  methods:{
    aa(){
      this.$kkLoading()
    },
    bb(){
      this.$hideLoading()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
