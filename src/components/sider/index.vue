<template>
  <div class="sidebar-container">
    <el-aside width="220px">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i>导航二</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    }
  };
</script>

<style type="text/scss" lang="scss">
  .sidebar {
    &-container {
      .el-menu {
        border-right: none;
      }
      .el-submenu {
        &__title {
          width: 220px;
          height: 45px !important;
          line-height: 45px !important;
        }
      }
    }
  }
</style>

<style type="text/scss" lang="scss" scoped>
  .sidebar {
    &-container {
      -webkit-transition: width .28s;
      transition: width .28s;
      width: 220px !important;
      background-color: #304156;
      height: 100%;
      position: fixed;
      font-size: 0;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;

      .el-submenu {
        .el-menu-item {
          min-width: 220px !important;
          background-color: #1f2d3d !important;

          &:hover {
            background-color: #001528 !important;
          }
        }
      }

      .nest-menu {
        .el-submenu > .el-submenu__title {
          min-width: 220px !important;
          background-color: #1f2d3d !important;

          &:hover {
            background-color: #001528 !important;
          }
        }
      }
    }
  }
</style>
