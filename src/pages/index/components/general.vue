<template>
   <div class="home-card-container">
    <div class="card-container clearfix">
      <el-col class="home-card" :span="8">
        <el-card class="card-list" shadow="hover">
          <div class="clearfix">
            <div class="icon fl">
              <span class="svg-container">
                <svg-icon icon-class="home_new_user"></svg-icon>
              </span>
            </div>
            <div class="desc fr">
              <p class="title">新用户注册</p>
              <p class="number">{{ 999 }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col class="home-card" :span="8">
        <el-card class="card-list" shadow="hover">
          <div class="clearfix">
            <div class="icon fl">
              <span class="svg-container color-blue">
                <svg-icon icon-class="home_look_total"></svg-icon>
              </span>
            </div>
            <div class="desc fr">
              <p class="title">昨日访问</p>
              <p class="number">{{ 999 }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col class="home-card" :span="8">
        <el-card class="card-list" shadow="hover">
          <div class="clearfix">
            <div class="icon fl">
              <span class="svg-container color-red">
                <svg-icon icon-class="home_user_total"></svg-icon>
              </span>
            </div>
            <div class="desc fr">
              <p class="title">累计注册</p>
              <p class="number">{{ 999 }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
   </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.home-card-container {
  margin: 30px;
  .card-container {
    margin: 0 -30px;
  }
  .home-card {
    padding: 0 30px;
    .card-list {
      >div {
        .icon {
          line-height: 80px;
          font-size: 40px;
          .svg-container {
            &.color-blue {
              color: rgb(64, 158, 255);
            }
            &.color-red {
              color: #c33c49;
            }
          }
        }
        .desc {
          text-align: right;
          line-height: 60px;
          .title {
            margin: 0;
            line-height: 20px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
          }
          .number {
            margin: 0;
            height: 60px;
            line-height: 60px;
            font-size: 38px;
          }
        }
      }
    }
  }
}
</style>
