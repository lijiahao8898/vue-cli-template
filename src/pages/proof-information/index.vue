<template>
    <div class="proof-information">
        <el-card shadow="never">
            <div slot="header" class="clearfix">
                <h2>{{ $route.meta.title }}</h2>
            </div>
            <search-group :init-data="searchOptions" @search="search"></search-group>
            <div class="selection">
                <div class="selection-item"
                     :class="{active: selection.includes(index)}"
                     v-for="(item, index) in selectionOptions" :key="index">
                    <div class="selection-item__text">{{ item.label }}</div>
                </div>
            </div>
            <div class="opera">
                <el-button type="primary" round>导出全部</el-button>
                <el-button type="primary" round>导出勾选项</el-button>
            </div>
            <zy-table :tableData="tableData" :column="columnData" :isSelection="true" :handleSelectionChange="handleSelectionChange"></zy-table>
        </el-card>
    </div>
</template>

<script>
import searchGroup from '@/components/search-group/index';
import zyTable from '@/components/zy-libraries/zy-table';

export default {
    components: {
        searchGroup,
        zyTable
    },
    data() {
        return {
            //表格数据
            tableData: [
                {name: 111, is_active: true, protocol: 'TCP', progress: 10, tab: [1, 2, 3]},
                {
                    name: 111, is_active: true, protocol: 'TCP', progress: 10, tab: [
                        {name: '标签一', type: '', color: "#0f0", textColor: '#000'},
                        {name: '标签二', type: 'success'},
                        {name: '标签三', type: 'info'},
                        {name: '标签四', type: 'warning'},
                        {name: '标签五', type: 'danger'}
                    ]
                },
                {name: 111, is_active: true, protocol: 'TCP', type: 1, flag: 1},
                {name: 111, is_active: true, protocol: 'TCP'},
                {name: 111, is_active: true, protocol: 'TCP'},
                {name: 111, is_active: true, protocol: 'TCP'},
                {name: 111, is_active: true, protocol: 'TCP'},
                {name: 111, is_active: true, protocol: 'TCP'},
                {name: 111, is_active: true, protocol: 'TCP'},
                {name: 111, is_active: true, protocol: 'TCP'},
            ],
            columnData: [
                {
                    label: '证照授权期限',
                    prop: 'name',
                },
                {
                    label: '历史授权记录',
                    prop: 'name',
                },
                {
                    label: '姓名',
                    prop: 'name',
                },
                {
                    label: '性别',
                    prop: 'name',
                },
                {
                    label: '公民身份号码',
                    prop: 'name',
                },
                {
                    label: '民族',
                    prop: 'name',
                },
                {
                    label: '出生日期',
                    prop: 'name',
                },
                {
                    label: '住址',
                    prop: 'name',
                },
                {
                    label: '有效期起',
                    prop: 'name',
                },
                {
                    label: '有效期止',
                    prop: 'name',
                },
                {
                    dataType: 'option',
                    label: '操作',
                    width: '200px',
                    operation: [
                        {
                            name: '查看证照',
                            size: 'mini',
                            icon: 'el-icon-edit',
                            plain: true,
                            showHide: (row) => {
                                console.log(111 || row);
                                // 是否显示
                                return true;
                            },
                            clickFun: async (row) => {
                                // 触发方法
                                console.log(this.$openModal)
                                const res = await this.$openModal(() => import('./subs/detailModal.vue'), {
                                    value: true
                                }).catch(e => {})
                                console.log(2 || row);
                            }
                        },
                    ]

                }
            ],
            searchOptions: [
                {
                    label: '授权人姓名',
                    type: 'input',
                    key: 'service_id',
                    value: '',
                }, {
                    label: '身份照',
                    type: 'input',
                    key: 'service_id_fxz',
                    value: '',
                }
            ],
            selectionOptions: [
                {label: '身份证明', value: ''},
                {label: '户籍证明', value: ''},
                {label: '公积金贷款结清证明', value: ''},
                {label: '公积金存缴信息', value: ''},
                {label: '借款抵押合同', value: ''},
                {label: '行驶证', value: ''},
                {label: '不动产证明', value: ''},
                {label: '社会保险个人参保证明', value: ''},
                {label: '营业执照', value: ''},
                {label: '个人身份信息', value: ''},
                {label: '流动人口居住登记证明', value: ''},
                {label: '婚姻登记信息', value: ''},
                {label: '涉案民事刑事判决记录', value: ''},
            ],
            selection: [1]
        };
    },
    methods: {
        search(val) {
            console.log(val)
        },
        handleSelectionChange (selectionList) {
            console.log(selectionList)
        }
    }
};
</script>

<style lang="scss" scoped>
.selection {
    display: flex;
    flex-wrap: wrap;
    background-color: #f1f1f1;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;

    &-item {
        width: 19.5%;
        margin-right: 0.5%;
        padding: 18px;
        box-sizing: border-box;
        text-align: center;
        transition: background .3s;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 8px;
        font-size: 14px;

        &__text {
            transition: margin-top .3s;
        }

        &.active, &:hover {
            background: #fff;
            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2) inset;
            font-weight: bold;

            .selection-item__text {
                margin-top: -2px;
            }

        }
    }
}

.opera {
    margin-bottom: 20px;
}

</style>