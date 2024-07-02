<template>
    <el-container>
        <side-component></side-component>
        <el-container>
            <div class="container-wrapper">
                <header-component></header-component>
                <el-main :style="isCollapseStyle">
                    <router-view></router-view>
                </el-main>
            </div>
        </el-container>
    </el-container>
</template>

<script>
import headerComponent from '@/components/layout/header';
import sideComponent from '@/components/layout/sider';
import {mapState} from "vuex";

export default {
    components: {
        sideComponent,
        headerComponent
    },
    data() {
        return {
            tableData: []
        };
    },
    computed: {
        ...mapState({
            isCollapse: state => state.system.isCollapse
        }),
        isCollapseStyle() {
            return {marginLeft: this.isCollapse ? '65px' : '200px', transition: 'all .45s'};
        },
    }
};
</script>

<style type="text/scss" lang="scss" scoped>
    .container-wrapper {
        width: 100%;
    }
</style>

