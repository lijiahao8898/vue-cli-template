<template>
    <el-container>
        <sider-component></sider-component>
        <el-container>
            <!-- header无法单独拆分 直接在el-container下 会增加class is-vertical-->
            <el-header class="header" style="text-align: right; font-size: 14px; height: 60px;">
                <div class="header-wrapper" :style="isCollapseStyle">
                    <div class="hamburger" @click="toggleHamburger" v-if="isCollapse">
                        <i class="el-icon-s-unfold"></i>
                    </div>
                    <div class="hamburger" @click="toggleHamburger" v-else>
                        <i class="el-icon-s-fold"></i>
                    </div>
                    <el-dropdown>
                        <i class="el-icon-setting" style="font-size:16px;margin-right: 15px;color: #fff;"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="username">王小虎</span>
                </div>
            </el-header>
            <el-main :style="isCollapseStyle">
                <router-view></router-view>
                <!--          <el-table :data="tableData">-->
                <!--            <el-table-column prop="date" label="日期" width="140">-->
                <!--            </el-table-column>-->
                <!--            <el-table-column prop="name" label="姓名" width="120">-->
                <!--            </el-table-column>-->
                <!--            <el-table-column prop="address" label="地址">-->
                <!--            </el-table-column>-->
                <!--          </el-table>-->
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  import siderComponent from '@/components/sider';
  import {mapState, mapMutations} from 'vuex';

  export default {
    components: {
      siderComponent
    },
    data () {
      return {
        tableData: []
      };
    },
    computed: {
      ...mapState({
        isCollapse: state => state.system.isCollapse
      }),
      isCollapseStyle () {
        return {marginLeft: this.isCollapse ? '65px' : '200px', transition: 'all .45s'}
      },
    },
    methods: {
      ...mapMutations(['toggleSidebar']),
      toggleHamburger () {
        this.toggleSidebar(!this.isCollapse);
      }
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
    @import "@/assets/style/config.scss";

    .header {
        text-align: right;
        font-size: 14px;
        background: #1D253E;
        /*box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);*/
        color: #fff;
        line-height: 60px;
        height: 60px;
        width: 100%;
    }

    .hamburger {
        position: absolute;
        font-size: 20px;
        cursor: pointer;
    }

    .username {
        font-size: 16px;
    }
</style>

