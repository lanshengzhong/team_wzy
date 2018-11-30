<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <el-dropdown class="avatar-container" :show-timeout="20" trigger="hover">
      <!-- 账号信息 只有名字没有头像 -->
      <div class="avatar-wrapper">
        <span class="user-name">{{userinfo.nickname}}</span>
        <svg-icon icon-class="out"/>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item>
          <span @click="logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import store from 'store'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      userinfo: store.get('userinfo')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    ...mapActions([
      'loginOut',
      'ToggleSideBar'
    ]),
    toggleSideBar() {
      this.ToggleSideBar()
    },
    logout() {
      // 退出登录
      this.loginOut().then(() => {
        // 为了重新实例化vue-router对象 避免bug
        window.location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    line-height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    color: #333;
    font-size: 16px;
    .avatar-wrapper {
      cursor: pointer;
    }
  }
}
</style>

