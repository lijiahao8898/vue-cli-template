<template>
  <el-container>
    <sider-component></sider-component>
    <div :style="{marginLeft: isCollapse ? '65px' : '200px', width: '100%', transition: 'all .45s'}">
      <el-container>
        <!-- header无法单独拆分 直接在el-container下 会增加class is-vertical-->
        <el-header class="header" style="text-align: right; font-size: 12px; height: 45px;">
          <div class="hamburger" @click="hideSidebar" v-if="isCollapse">
            <i class="el-icon-s-unfold"></i>
          </div>
          <div class="hamburger" @click="showSidebar" v-else>
            <i class="el-icon-s-fold"></i>
          </div>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
  </el-container>
</template>

<script>
  import siderComponent from '@/components/sider';

  export default {
    components: {
      siderComponent: siderComponent
    },
    data () {
      return {
        tableData: [],

      };
    },
    computed: {
      isCollapse () {
        return this.$store.state.system.isCollapse;
      }
    },
    methods: {
      hideSidebar () {
        this.$store.commit('hideSidebar', false);
      },
      showSidebar () {
        this.$store.commit('hideSidebar', true);
      }
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import "@/assets/style/config.scss";

  .header {
    text-align: right;
    font-size: 14px;
    background: $color-white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    color: #333;
    line-height: 45px;
    height: 45px;
    width: 100%;
  }

  .hamburger {
    position: absolute;
    font-size: 20px;
    cursor: pointer;
  }
</style>

