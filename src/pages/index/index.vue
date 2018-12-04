<template>
  <div class="home-container">
    <!-- 首页概况 -->
    <General></General>
    <!-- 用户趋势 -->
    <Trend></Trend>
  </div>
</template>

<script>
import General from './components/general'
import Trend from './components/trend'
export default {
  components: {
    General,
    Trend
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
