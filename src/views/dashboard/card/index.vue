<template>
  <el-row :gutter="15">
    <el-col :span="6">
      <el-card calss="cardMargin">
        <div>
          <span style="color: #aaa">总销售额</span>
          <svg t="1675597492706" class="icon cardSvg" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2863" width="20" height="20"><path d="M527.63663 877.280404c211.094766 0 382.205888-171.123402 382.205888-382.204865 0-211.080439-171.110099-382.203842-382.204865-382.203842-211.095789 0-382.204865 171.123402-382.204865 382.203842S316.541865 877.280404 527.63663 877.280404zM527.637654 160.64577c184.687326 0 334.428745 149.730163 334.428745 334.428745-0.001023 184.698582-149.742443 334.429769-334.429769 334.429769-184.686303-0.001023-334.428745-149.73221-334.428745-334.429769C193.206862 310.37798 342.949304 160.64577 527.637654 160.64577zM551.525714 423.413406l-47.777143 0 0 238.877529 47.77612 0L551.525714 423.413406zM551.525714 327.862189l-47.777143 0 0 47.77612 47.777143 0L551.525714 327.862189z" fill="#8a8a8a" p-id="2864" /></svg>
        </div>
        <div style="margin: 6px 0">
          <span>￥<span class="zongxiaoshoue">12306</span></span>
        </div>
        <div style="height: 50px">
          3 { no ECharts }
          <div>周同比：11，日同比：11</div>
        </div>
        <div style="margin: 0 0; height: 1px; border-top: 1px solid #ddd;" />
        <div>
          <span>每日销售额：￥<span style="font-size: 22px; color: #ff6666">1234</span></span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card calss="cardMargin">
        <div>
          <span style="color: #aaa">总销售额</span>
          <svg t="1675597492706" class="icon cardSvg" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2863" width="20" height="20"><path d="M527.63663 877.280404c211.094766 0 382.205888-171.123402 382.205888-382.204865 0-211.080439-171.110099-382.203842-382.204865-382.203842-211.095789 0-382.204865 171.123402-382.204865 382.203842S316.541865 877.280404 527.63663 877.280404zM527.637654 160.64577c184.687326 0 334.428745 149.730163 334.428745 334.428745-0.001023 184.698582-149.742443 334.429769-334.429769 334.429769-184.686303-0.001023-334.428745-149.73221-334.428745-334.429769C193.206862 310.37798 342.949304 160.64577 527.637654 160.64577zM551.525714 423.413406l-47.777143 0 0 238.877529 47.77612 0L551.525714 423.413406zM551.525714 327.862189l-47.777143 0 0 47.77612 47.777143 0L551.525714 327.862189z" fill="#8a8a8a" p-id="2864" /></svg>
        </div>
        <div style="margin: 6px 0">
          <span>￥<span class="zongxiaoshoue">12306</span></span>
        </div>
        <div style="height: 50px">
          <EAchartsLine />
        </div>
        <div style="margin: 0 0; height: 1px; border-top: 1px solid #ddd;" />
        <div>
          <span>每日销售额：￥<span style="font-size: 22px; color: #ff6666">1234</span></span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card calss="cardMargin">
        <div>
          <span style="color: #aaa">总销售额</span>
          <svg t="1675597492706" class="icon cardSvg" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2863" width="20" height="20"><path d="M527.63663 877.280404c211.094766 0 382.205888-171.123402 382.205888-382.204865 0-211.080439-171.110099-382.203842-382.204865-382.203842-211.095789 0-382.204865 171.123402-382.204865 382.203842S316.541865 877.280404 527.63663 877.280404zM527.637654 160.64577c184.687326 0 334.428745 149.730163 334.428745 334.428745-0.001023 184.698582-149.742443 334.429769-334.429769 334.429769-184.686303-0.001023-334.428745-149.73221-334.428745-334.429769C193.206862 310.37798 342.949304 160.64577 527.637654 160.64577zM551.525714 423.413406l-47.777143 0 0 238.877529 47.77612 0L551.525714 423.413406zM551.525714 327.862189l-47.777143 0 0 47.77612 47.777143 0L551.525714 327.862189z" fill="#8a8a8a" p-id="2864" /></svg>
        </div>
        <div style="margin: 6px 0">
          <span>￥<span class="zongxiaoshoue">12306</span></span>
        </div>
        <div style="height: 50px">
          <EchartsBar />
        </div>
        <div style="margin: 0 0; height: 1px; border-top: 1px solid #ddd;" />
        <div>
          <span>每日销售额：￥<span style="font-size: 22px; color: #ff6666">1234</span></span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card calss="cardMargin">
        <div>
          <span style="color: #aaa">运营效果</span>
          <svg t="1675597492706" class="icon cardSvg" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2863" width="20" height="20"><path d="M527.63663 877.280404c211.094766 0 382.205888-171.123402 382.205888-382.204865 0-211.080439-171.110099-382.203842-382.204865-382.203842-211.095789 0-382.204865 171.123402-382.204865 382.203842S316.541865 877.280404 527.63663 877.280404zM527.637654 160.64577c184.687326 0 334.428745 149.730163 334.428745 334.428745-0.001023 184.698582-149.742443 334.429769-334.429769 334.429769-184.686303-0.001023-334.428745-149.73221-334.428745-334.429769C193.206862 310.37798 342.949304 160.64577 527.637654 160.64577zM551.525714 423.413406l-47.777143 0 0 238.877529 47.77612 0L551.525714 423.413406zM551.525714 327.862189l-47.777143 0 0 47.77612 47.777143 0L551.525714 327.862189z" fill="#8a8a8a" p-id="2864" /></svg>
        </div>
        <div style="margin: 6px 0">
          <span><span class="zongxiaoshoue" style="color: green">82%</span></span>
        </div>
        <div style="height: 50px">
          <el-progress :text-inside="true" :stroke-width="24" :percentage="82" status="success" />
        </div>
        <div style="margin: 0 0; height: 1px; border-top: 1px solid #ddd;" />
        <div>
          <span>123456：￥<span style="font-size: 22px; color: #ff6666">1234</span></span>
        </div>
      </el-card>
    </el-col>
    <!-- 下面的 sale tab -->
    <el-col :span="24" style="margin-top: 15px">
      <div>
        <el-card>
          <div class="clearfix cardheader">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <!-- el-tabs----------v-model="activeName" @tab-click="handleClick" -->
              <el-tab-pane label="销售额" name="first">bar1</el-tab-pane>
              <el-tab-pane label="访问量" name="second">bar2</el-tab-pane>
            </el-tabs>
            <div class="headerRight">
              <span class="dataspan" @click="getToday"><a>今日</a></span>
              <span class="dataspan" @click="getWeek"><a>本周</a></span>
              <span class="dataspan" @click="getMonth"><a>本月</a></span>
              <span class="dataspan" @click="getYear"><a>本年</a></span>
              <!-- el-date-picker--------v-model="value1" -->
              <el-date-picker
                v-model="valueDataPick"
                value-format="yyyy-MM-dd"
                size="small"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
              <!-- <el-date-picker
                v-model="valueDataPick"
                value-format="yyyy-MM-dd"
                size="small"
                type="monthrange"
                range-separator="-"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
              /> -->
            </div>
          </div>
          <el-col :span="18">
            <div ref="echartsbar2" class="echartsbar2" />
          </el-col>
          <el-col :span="6">8
            <h3>门店{{ showXIAOSHOUEorFANGWENLIANG }}排名</h3>
            <div class="shoplistxiaoshoue">
              <li><span class="indexrender">1</span><span>KFC</span></li>
              <li><span class="indexrender">1</span><span>KFC</span></li>
              <li><span class="indexrender">1</span><span>KFC</span></li>
              <li><span class="indexrender4">4</span><span>KFC</span></li>
              <li><span class="indexrender4">4</span><span>KFC</span></li>
              <li><span class="indexrender4">4</span><span>KFC</span></li>
              <li><span class="indexrender4">4</span><span>KFC</span></li>
            </div>
          </el-col>
        </el-card>
      </div>
    </el-col>
    <el-col :span="12" style="margin-top: 15px">
      <el-card>1</el-card>
    </el-col>
    <el-col :span="12" style="margin-top: 15px">
      <el-card>2</el-card>
    </el-col>
  </el-row>
</template>

<script>
import moment from 'moment'
import * as echarts from 'echarts'
import EAchartsLine from './line'
import EchartsBar from './bar'
export default {
  name: 'Card',
  components: {
    EAchartsLine,
    EchartsBar
  },
  data() {
    return {
      activeName: 'first',
      valueDataPick: []
    }
  },
  computed: {
    showXIAOSHOUEorFANGWENLIANG: function() {
      return this.activeName === 'first' ? '销售额' : '访问量'
    },
    bar2Title: function() {
      return this.activeName === 'first' ? '销售额趋势' : '访问量趋势'
    },
    bar2SeriesDataArray: function() {
      return this.activeName === 'first' ? [10, 52, 200, 334, 390, 330, 220, 10, 52, 200, 334, 390] : [100, 52, 200, 3340, 3900, 330, 220, 9000, 52, 2000, 334, 3900]
    }
  },
  watch: {
    bar2Title() { // 被监听的属性就是 this.bar2Title // 监听 this.activeName 也行
      echarts.init(this.$refs.echartsbar2).setOption({
        title: {
          text: this.bar2Title // echarts 中，option对象里新的值会替换旧的值，旧的值不变！
        },
        series: [
          {
            data: this.bar2SeriesDataArray
          }
        ]
      })
    }
  },
  mounted() {
    echarts.init(this.$refs.echartsbar2).setOption({
      title: {
        text: this.bar2Title
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: this.bar2SeriesDataArray
        }
      ]
    })
  },
  methods: {
    handleClick() {},
    getToday() {
      const aa = moment().format('YYYY-MM-DD')
      this.valueDataPick = [aa, aa]
    },
    getWeek() {
      // 如果忘了就去看moment的文档
      const aa = moment().startOf('week').format('YYYY-MM-DD')
      const bb = moment().endOf('week').format('YYYY-MM-DD')
      // console.log(aa)
      this.valueDataPick = [aa, bb]
    },
    getMonth() {
      const aa = moment().startOf('month').format('YYYY-MM-DD')
      const bb = moment().endOf('month').format('YYYY-MM-DD')
      this.valueDataPick = [aa, bb]
    },
    getYear() {
      const aa = moment().startOf('year').format('YYYY-MM-DD')
      const bb = moment().endOf('year').format('YYYY-MM-DD')
      this.valueDataPick = [aa, bb]
    }
  }
}
</script>

<style scoped lang="less">
  .dataspan {
    &:hover {
      color: rgb(69, 132, 214)
    }
  }
  .shoplistxiaoshoue {
    margin: 20px 0 0 0;
    li {
      margin: 0;
      padding: 0;
      .indexrender {
        // float: left;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #000;
        color: #fff;
        text-align: center;
        line-height: 20px;
        margin-right: 20px;
        // margin-left: 10px;
      }
      .indexrender4 {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        text-align: center;
        line-height: 20px;
        margin-right: 20px;
      }
    }
  }
</style>

<style scoped>
  * {
    margin: 0;
    padding: 5; /** it is invalid and i don't know why*/
  }
  .shoplistxiaoshoue {
    list-style-type: none;
  }
  .shoplistxiaoshoue li {
    height: 48px;
  }
  .echartsbar2 {
    width: 100%;
    height: 400px;
    /* background-color: rgb(107, 79, 79); */
  }
  .cardheader {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .headerRight {
    position: absolute;
    right: 0;
    top: 5px;
    display: inline;
    float: right;
  }
  .headerRight span {
    margin: 0 10px;
  }
   .cardMargin {
    margin: 0 20px; /** it is invalid and i don't know why*/
  }
  .cardSvg {
    float: right;
    margin: 2px 0 0 0;
  }
  .zongxiaoshoue {
    color: rgb(238, 100, 100);
    font-size: 25px;
  }

  /* element: */
  >>>.el-tabs__nav {
    padding: 0 15px !important;
  }
  >>>.el-tabs__item {
    font-size: 16px !important;
  }
  /* >>>.el-range-editor {
    margin: 3px;
    height: 34px !important;
  } */
  >>>.el-tabs__active-bar {
    width: 81px !important;
  }
</style>

<style scoped lang="scss">

</style>
