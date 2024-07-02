<template>
    <el-header class="header" style="text-align: right; font-size: 14px; height: 60px;">
        <div class="header-wrapper" :style="isCollapseStyle">
            <div class="hamburger" @click="toggleHamburger">
                <i class="el-icon-s-unfold" v-if="isCollapse"></i>
                <i class="el-icon-s-fold" v-else></i>
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
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    data () {
        return {

        };
    },
    computed: {
        ...mapState({
            isCollapse: state => state.system.isCollapse
        }),
        isCollapseStyle () {
            return {marginLeft: this.isCollapse ? '65px' : '200px', transition: 'all .45s'};
        },
    },
    methods: {
        ...mapMutations('system', ['toggleSidebar']),
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
