<template>
    <el-card shadow="never">
        <zy-item label="标签">你好世界！</zy-item>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
  import siderComponent from '@/components/sider';
  import {mapState, mapMutations} from 'vuex';

  export default {
    components: {
      siderComponent
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
    },
    methods: {
      ...mapMutations(['toggleSidebar']),
      toggleHamburger() {
        this.toggleSidebar(!this.isCollapse);
      }
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>

</style>

