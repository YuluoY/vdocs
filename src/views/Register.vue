<template>
    <div id="register">
        <el-form :model="userInfo"
                 status-icon
                 :rules="stuFormRule"
                 ref="stuForm"
                 label-width="100px"
                 class="demo-ruleForm"
                 autocomplete="off">
            <div class="box">
                <div>注册界面</div>
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model.trim="userInfo.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model.trim="userInfo.password" show-password
                              placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model.trim="userInfo.password2" show-password
                              placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input type="text" v-model.trim.number="userInfo.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="userInfo.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交注册</el-button>
                    <router-link to="/" tag="el-button">返回</router-link>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                userInfo: {gender: '男'},
                stuFormRule: {
                    id: [{required: true, message: '学号不能为空！', trigger: 'blur'}],
                    username: [{required: true, message: '用户名不能为空！', trigger: 'blur'}],
                    password: [{required: true, validator: this.checkPwd, trigger: 'blur'}],
                    password2: [{required: true, validator: this.checkPwd2, trigger: 'blur'}],
                    age: [{validator: this.checkAge, trigger: 'blur'}],
                }
            };
        },
        methods: {
            checkPwd(rules, value, callback) {
                value.length < 6 ? callback(new Error("字符长度要大于等于6位！")) : callback();
            },
            checkPwd2(rules, value, callback) {
                if (this.userInfo.password !== this.userInfo.password2) {
                    callback(new Error('两次密码输入不一致！'));
                } else {
                    callback();
                }
            },
            checkAge(rules, value, callback) {
                let patten = /[a-zA-Z]/g;
                if (patten.test(value)) {
                    callback(new Error("不允许有英文字符！"))
                } else if (value < 0 || value > 200) {
                    callback(new Error("请输入正确的年龄！"))
                }
                if (value !== '') {
                    callback()
                }
            },
            submitForm() {
                this.$refs.stuForm.validate(async (valid) => {
                    if (valid) {
                        try {
                            const res = await this.$axios.post('/web/register', this.userInfo);
                            if (res) {
                                this.$message.success(`"${this.userInfo.username}"注册成功, 3秒后跳转到登录页面！`);
                                this.userInfo = {};
                                setTimeout(() => {
                                    this.$router.push({name: 'Login'});
                                }, 3000)
                            }
                        } catch (err) {
                            this.$message.error(err.message);
                        }
                    } else {
                        this.$message.error("请正确填写表单后提交！")
                        return false;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #register {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .demo-ruleForm {
        width: 480px;
        margin-top: -200px;
        max-width: 500px;
        max-height: 400px;
        box-shadow: 10px 10px 20px silver;
    }

    .box {
        padding: 30px;
        background-color: white;
    }

    .box > div {
        margin-right: 60px;
    }

    .box > div:first-child {
        font-size: 35px;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        margin-left: 50px;
        padding-bottom: 30px;
    }

    .forget {
        text-decoration: none;
        color: black;
    }

    .forget:hover {
        color: blue;
        text-decoration: underline;
    }
</style>