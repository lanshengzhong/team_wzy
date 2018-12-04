<template>
  <div class="lintchart"></div>
</template>

<script>
import echarts from 'echarts'

var option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  tooltip : {
    trigger : "axis",
    show : true
  },
  series: [{
    data: [159, 352, 298, 220, 100, 450, 82],
    type: 'line'
  }]
}

export default {
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var myChart = echarts.init(document.getElementsByClassName('lintchart')[0])
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.lintchart {
  width: 100%;
  height: 400px;
}
</style>
