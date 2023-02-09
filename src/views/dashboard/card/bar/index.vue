<template>
  <div ref="echarts2" class="echartsbar" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartsBar',
  mounted() {
    echarts.init(this.$refs.echarts2).setOption({
      // title: {} // not necessary
      xAxis: {
        show: false,
        type: 'category'
      },
      yAxis: {
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [10, 30, 20, 30]
        }
      ],
      grid: { // 布局相关的
        left: 1,
        top: 5,
        right: 1,
        bottom: 1
      }
    })
  }
}
</script>

<style>
.echartsbar {
    width: 100%;
    height: 100%;
    color: rgb(172, 71, 219);
}
</style>
