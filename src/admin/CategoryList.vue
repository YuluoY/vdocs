<template>
    <div id="categoryList">
        <el-table
                lazy
                :data="categoryListData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%; text-align: center">
            <el-table-column label="ID" prop="_id"></el-table-column>
            <el-table-column label="类别名称" prop="name"></el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div id="categoryListPagination" v-show="categoryListData.length">
            <el-pagination
                    style="margin-top: 2rem;"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageCapacity"
                    background
                    layout="prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CategoryList",
        data() {
            return {
                categoryListData: [],
                search: '',
                currentPage: 1,
                pageCapacity: 10,
                total: 0,
            }
        },
        methods: {
            handleCurrentChange(val) {

            },
            handleEdit(index, row) {
                this.$router.push({
                    name: 'EditCategory',
                    params: row,
                })
            },
            async handleDelete(index, row) {
                if (confirm(`确认删除"${row.name}"分类吗？`)) {
                    const res = await this.$axios.delete('/rest/category', {data: {_id: row._id}});
                    if (res) {
                        this.$message.success(`"${row.name}"分类删除成功！`)
                        await this.fetchCategoryList();
                    }
                }
            },
            async fetchCategoryList() {
                const res = await this.$axios.get(`/admin/findPagination/category/${this.currentPage}/${this.pageCapacity}`);
                this.categoryListData = res.data.list;
                this.total = res.data.total;
            }
        },
        created() {
            this.fetchCategoryList();
        }
    }
</script>

<style scoped>
    /deep/ .el-table th > .cell {
        text-align: center;
    }

    /deep/ .el-table .cell {
        text-align: center;
    }
</style>