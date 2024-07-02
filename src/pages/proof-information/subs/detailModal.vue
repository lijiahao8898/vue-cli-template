<template>
    <el-dialog :title="'证件照'" :visible.sync="value" :before-close="handleClose" width="850px">
        <span slot="footer" class="commit-wrap">
            <el-button @click="handleClose">关 闭</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },

    computed: {},

    methods: {
        handleClose() {
            if (this.$options.cancel) {
                this.$options.cancel(false)
            } else {
                this.$emit('input', false)
            }
        },
    },

    created() {
    },

};

</script>

<style lang="scss" scoped>
.top-class {
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 15px;
    padding: 0px 5px;
    margin-bottom: 10px;
}

.top-class-active {
    background-color: #1790FF;
    color: #fff;
}
</style>
