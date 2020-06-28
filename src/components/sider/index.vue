<template>
  <div class="sidebar-container">
    <div class="sidebar-header" :class="{'sidebar-header-is-collapse': isCollapse}">
      <img class="sidebar-header__logo" src="../../assets/images/logo.png">
      <span class="sidebar-header__title">技术有限公司</span>
    </div>
    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             background-color="#F5F6F9"
             text-color="rgba(46, 52, 51, 1)"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      };
    },
    computed: {
      ...mapState({
        isCollapse: state => state.system.isCollapse,
      })
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-menu-vertical-demo {
    height: calc(100% - 60px);
  }
</style>

<style type="text/scss" lang="scss" scoped>
  @import "@/assets/style/config.scss";
  .sidebar{
    &-container {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      box-shadow: 2px 0 6px rgba(0, 25, 56, 0.08);
    }
    &-header {
      background: $--menu-background-color;
      display: flex;
      width: 200px;
      /*border-bottom: 1px solid rgba(0,0,0,0.2);*/
      transition: all .45s;
      &.sidebar-header-is-collapse {
        width: 64px;
        .sidebar-header__logo {
          margin-left: 12px;
        }
        .sidebar-header__title {
          opacity: 0;
        }
      }
      &__logo {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        margin-top: 10px;
        transition: margin-left .3s .45s;
      }
      &__title {
        font-size: 18px;
        height: 60px;
        line-height: 60px;
        color: $color-white;
        display: inline-block;
        flex: 1;
        opacity: 1;
        transition: opacity .3s;
        font-weight: 500;
      }
    }
  }
</style>
