<template>
    <el-container>
        <sider-component></sider-component>
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
    import headerComponent from '@/components/header'
    import siderComponent from '@/components/sider';
    import {mapState} from "vuex";

    export default {
        components: {
            siderComponent,
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
                return {marginLeft: this.isCollapse ? '65px' : '200px', transition: 'all .45s'}
            },
        }
    };
</script>

<style type="text/scss" lang="scss" scoped>
    .container-wrapper {
        width: 100%;
    }
</style>

