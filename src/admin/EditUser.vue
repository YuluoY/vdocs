<template>
    <div id="editUser">
        <el-card>
            <el-divider content-position="left">{{ title }}</el-divider>
            <el-form style="text-align: left">
                <el-form-item label="用户名：" required>
                    <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码：" required>
                    <el-input v-model.trim="userInfo.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item label="年龄：">
                    <el-input v-model.number="userInfo.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="日期：">
                    <div class="block">
                        <el-date-picker
                                v-model="userInfo.date"
                                type="datetime"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="性别：">
                    <el-radio v-model="userInfo.gender" label="男">男</el-radio>
                    <el-radio v-model="userInfo.gender" label="女">女</el-radio>
                </el-form-item>
                <el-form-item label="管理员：">
                    <el-radio v-model="userInfo.isAdmin" :label="true">是</el-radio>
                    <el-radio v-model="userInfo.isAdmin" :label="false">否</el-radio>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click.native.prevent="save">提交</el-button>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "EditUser",
        data() {
            return {
                title: '创建用户',
                userInfo: {gender: '男', isAdmin: false, date: new Date().getTime()}
            }
        },
        methods: {
            async save() {
                let res = null,
                    msg = `"${this.userInfo.username}"用户信息编辑成功！`;
                if (this.title === '编辑用户') {
                    res = await this.$axios.put(`/rest/user`, {
                        condition: {username: this.userInfo.username},
                        modify: this.userInfo
                    })
                } else {
                    res = await this.$axios.post(`/rest/user`, this.userInfo);
                    msg = `"${this.userInfo.username}"用户信息创建成功！`;
                }
                if (res) {
                    this.$message.success(msg);
                    this.userInfo = {};
                    await this.$router.push('/userList');
                }
            },
        },
        created() {
            if (JSON.stringify(this.$route.params) !== '{}') {
                this.title = '编辑用户';
                this.userInfo = this.$route.params;
            } else {
                this.title = '创建用户';
            }
        }
    }
</script>

<style scoped>

</style>