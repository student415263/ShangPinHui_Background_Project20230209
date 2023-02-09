<template>
  <div ref="echarts1" class="echartsline" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'EchartsLine',
  mounted() {
    echarts.init(this.$refs.echarts1).setOption({
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
          type: 'line',
          data: [10, 30, 20, 30, 50, 60],
          itemStyle: {
            opacity: 0
          },
          lineStyle: {
            color: 'rgb(182, 78, 230)'
          },
          areaStyle: {
            // color: 'rgb(256, 206, 256)'
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgb(192, 91, 239)' // 0% 处的颜色
              }, {
                offset: 1, color: '#fff' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
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
  .echartsline {
    width: 100%;
    height: 100%;
    color: rgb(172, 71, 219);
  }

</style>
