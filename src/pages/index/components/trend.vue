<template>
  <div class="home-trend-container">
    <el-card class="trend-card">
      <div slot="header" class="clearfix">
        <div class="title fl">
          <span class="svg-container">
            <svg-icon icon-class="home_trend_icon" />
          </span>
          <span>用户趋势</span>
        </div>
        <div class="select fl">

        </div>
      </div>
      <div class="text">
        <LintChart></LintChart>
      </div>
    </el-card>
  </div>
</template>

<script>
import LintChart from './LintChart'
export default {
  components: {
    LintChart
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.home-trend-container {
  margin: 30px;
  .title {
    span:first-child {
      margin-right: 5px;
    }
  }
}
</style>
