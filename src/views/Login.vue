<template>
    <div class="login">
        <el-form :model="userForm"
                 status-icon
                 :rules="rules"
                 ref="userForm"
                 label-width="100px"
                 class="demo-ruleForm"
                 autocomplete="off">
            <div class="box">
                <div>登录界面</div>
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model.trim="userForm.username" placeholder="请输入用户名"
                              prefix-icon="el-icon-user" autofocus ref="usernameRef"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model.trim="userForm.password" show-password placeholder="请输入密码"
                              prefix-icon="el-icon-key"></el-input>
                </el-form-item>
                <el-form-item style="margin-top: -20px; text-align: right">
                    <router-link to="/forgot" tag="a" class="forgot">忘记密码？</router-link>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
                    <el-button @click="resetForm('userForm')">重置</el-button>
                    <router-link to="/register" tag="el-button">注册</router-link>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                userForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [{validator: this.validateName, trigger: 'blur'}],
                    password: [{validator: this.validatePassword, trigger: 'blur'}],
                }
            };
        },
        methods: {
            validateName(rule, value, callback) {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            },
            validatePassword(rule, value, callback) {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post(`/admin/login`, this.userForm).then(res => {
                            console.log(res.data)
                        })
                    } else {
                        this.$message.warning("信息填写完后再提交！")
                        return false;
                    }
                })

            },
            resetForm(forName) {
                this.$refs[forName].resetFields();
                this.$nextTick(() => this.$refs.usernameRef.focus())
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .login {
        width: 100vw;
        height: 100vh;
        background-color: rgba(192, 192, 192, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .demo-ruleForm {
        width: 40em;
        margin-top: -10em;
        box-shadow: 10px 10px 20px silver;
    }

    .box {
        padding: 5em;
        background-color: white;
    }

    .box > div {
        margin-right: 60px;
    }

    .box > div:first-child {
        font-size: 3em;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        margin-left: 50px;
        margin-bottom: 50px;
    }

    .forgot {
        text-decoration: none;
        color: black;
    }

    .forgot:hover {
        color: blue;
        text-decoration: underline;
    }
</style>
