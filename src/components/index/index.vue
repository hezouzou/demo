<template>
  <div>
    <div class="index">
        <div class="index-main" style="width:100%;height:30rem;" ref='main'></div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.drawLine();
},
  methods: {
    drawLine(){
      var myChart= this.$echarts.init(this.$refs.main)
     myChart.setOption({
       xAxis: {
         type: 'category',
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
       },
       yAxis: {
         type: 'value'
       },
       series: [{
         data: [820, 932, 901, 934, 1290, 1330, 1320],
         type: 'line'
       }]
     })
    }
  },
}
</script>

<style>
  .index{
    padding-bottom: 2rem;
  }
</style>