<template>
    <div id="editUser">
        <el-card>
            <el-divider content-position="left">{{ title }}</el-divider>
            <el-form style="text-align: left" label-width="120px" label-position="right">
                <el-form-item label="用户名：" required>
                    <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码：" required>
                    <el-input v-model.trim="userInfo.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item label="年龄：">
                    <el-input v-model.number="userInfo.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="头像：">
                    <el-upload
                            class="avatar-uploader"
                            :drag="!imageUrl"
                            :action="$axios.defaults.baseURL + '/admin/upload/user'"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-show="!imageUrl" class="el-icon-upload"></i>
                        <div v-show="!imageUrl" class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                        <div v-show="!imageUrl" class="el-upload__tip" slot="tip">只能上传jpg/png文件，且图片大小不超过2M</div>
                    </el-upload>
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
                <el-form-item label="管理员权限：">
                    <el-switch v-model="userInfo.isAdmin"></el-switch>
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
                userInfo: {gender: '男', isAdmin: false, date: new Date().getTime()},
                imageUrl: '',
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.userInfo.picture = res.url;
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
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
                this.imageUrl = this.userInfo.picture;
            } else {
                this.title = '创建用户';
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 12rem;
        height: 12rem;
        display: block;
        border-radius: 15px;
    }
</style>