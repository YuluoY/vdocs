<template>
    <div id="userList">
        <el-table
                lazy
                :data="userListData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%; text-align: center">
            <el-table-column label="ID" prop="_id" width="215"></el-table-column>
            <el-table-column label="头像">
                <template v-slot="scope">
                    <el-image :src="scope.row.picture" lazy style="border-radius:10px;"></el-image>
                </template>
            </el-table-column>
            <el-table-column label="用户名" prop="username" width="120"></el-table-column>
            <el-table-column label="密码" prop="password" width="220"></el-table-column>
            <el-table-column label="年龄" prop="age" width="50"></el-table-column>
            <el-table-column label="性别" prop="gender" width="50"></el-table-column>
            <el-table-column label="注册日期" prop="date" width="100"></el-table-column>
            <el-table-column label="管理员" prop="isAdmin" width="70" :formatter="formatterIsAdmin"></el-table-column>
            <el-table-column align="right" width="200">
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
        <div id="userListPagination" v-show="userListData.length">
            <el-pagination
                    style="margin-top: 2rem;"
                    @size-change="handleSizeChange"
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
    import dayjs from 'dayjs';

    export default {
        name: "UserList",
        data() {
            return {
                userListData: [],
                search: '',
                currentPage: 1,
                pageCapacity: 10,
                total: 0,
            }
        },
        methods: {
            async handleCurrentChange(val) {
                this.currentPage = val;
                await this.fetchUserList();
            },
            handleSizeChange(val) {

            },
            formatterIsAdmin(row, column, cellVal) {
                row.date = dayjs(row.date).locale('zh-cn').format('YYYY/MM/DD HH:mm:ss');
                return cellVal.toString();
            },
            handleEdit(index, row) {
                this.$router.push({name: 'EditUser', params: row})
            },
            async handleDelete(index, row) {
                const status = row.isAdmin ? '管理员' : '用户';
                if (confirm(`确认删除${status}"${row.username}"的账户吗？`)) {
                    const res = await this.$axios.delete(`/rest/user`, {data: {username: row.username}});
                    if (res) {
                        this.$message.success(row.username + '已被注销！');
                        await this.fetchUserList();
                    }
                }
            },
            async fetchUserList() {
                const res = await this.$axios.get(`/admin/findPagination/user/${this.currentPage}/${this.pageCapacity}`);
                this.userListData = res.data.list;
                this.total = res.data.total;
            }
        },
        created() {
            this.fetchUserList();
        },
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