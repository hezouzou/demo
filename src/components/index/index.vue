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
      chart:'',
      option:{
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [],
          type: 'line'
        }]
      },
      chartData: {
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        sData: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    }
  },
  mounted() {
    this.refreshData();
    this.drawLine();
  },
  methods: {
    drawLine(){
      this.chart= this.$echarts.init(this.$refs.main)
      this.chart.setOption(this.option);
    },
    refreshData(){
      let xData = this.chartData.xData,sData = this.chartData.sData;
      for(let i = 0; i < xData.length; i++){
        setTimeout(() => {
          this.option.xAxis.data.push(xData[i]);
          this.option.series[0].data.push(sData[i]);
          if (this.option.xAxis.data.length > 5) {
            this.option.xAxis.data.shift()
            this.option.series[0].data.shift()
            i--
          }
        }, 1000 * i)
      }
      
    }
  },
  watch: {
    option:{
       handler(newVal, oldVal) {
         if(this.chart){
           if(newVal){
             this.chart.setOption(newVal);
           } else {
             this.chart.setOption(oldVal);
           }
         } else {
           this.drawLine();
         }
       },
       deep: true
    }
  },
}
</script>

<style>
  .index{
    padding-bottom: 2rem;
  }
</style>