<template>
    <div id="editArticle">
        <el-card>
            <el-divider content-position="left">{{ title }}</el-divider>
            <el-form style="text-align: left; margin-right: 60px;" label-position="right" label-width="120px">
                <el-form-item label="标题：" required>
                    <el-input v-model="model.title" placeholder="请输入文章标题"></el-input>
                </el-form-item>
                <el-form-item label="作者：" required>
                    <el-select v-model="model.author" placeholder="请选择作者">
                        <el-option
                                v-for="item in authors"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="类别：" required>
                    <el-select v-model="model.categories" multiple placeholder="请选择文章类别">
                        <el-option
                                v-for="item in categories"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="图片：">
                    <el-upload
                            class="avatar-uploader"
                            :drag="!imageUrl"
                            :action="$axios.defaults.baseURL + '/admin/upload/article'"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="model.photo" :src="model.photo" class="avatar">
                        <i v-show="!imageUrl" class="el-icon-upload"></i>
                        <div v-show="!imageUrl" class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                        <div v-show="!imageUrl" class="el-upload__tip" slot="tip">只能上传jpg/png文件，且图片大小不超过2M</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="内容：" required>
                    <v-md-editor v-model="model.content" height="400px"></v-md-editor>
                </el-form-item>
                <el-form-item label="详情：">
                    <el-input type="textarea" rows="3" v-model="model.desc"></el-input>
                </el-form-item>
                <el-form-item label="更新日期：">
                    <div class="block">
                        <el-date-picker
                                v-model="model.updateDate || Date.now()"
                                type="datetime"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="浏览次数：">
                    <el-input-number v-model="model.viewsNum || 1"></el-input-number>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click.native.prevent="save">提交</el-button>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "EditArticle",
        data() {
            return {
                title: '创建文章',
                model: {},
                authors: [],
                categories: [],
                imageUrl: ''
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.model.photo = res.url;
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
                    msg = `"${this.model.title}"文章信息编辑成功！`;
                if (this.title === '编辑文章') {
                    res = await this.$axios.put(`/rest/article`, {
                        condition: {title: this.model.title},
                        modify: this.model
                    })
                } else {
                    res = await this.$axios.post(`/rest/article`, this.model);
                    msg = `"${this.model.title}"文章信息创建成功！`;
                }
                if (res) {
                    this.$message.success(msg);
                    this.model = {};
                    await this.$router.push('/articleList');
                }
            },
            async findAuthors() {
                const res = await this.$axios.get(`/rest/category/?name=作者`);
                const cate = await this.$axios.get(`/rest/category/?name=文章`)
                this.categories = cate.data;
                this.authors = res.data;
            }
        },
        created() {
            this.findAuthors();
            if (JSON.stringify(this.$route.params) !== '{}') {
                this.model = this.$route.params;
                this.title = '编辑文章';
            } else {
                this.title = '创建文章';
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
        height: 12rem;
        display: block;
        border-radius: 15px;
    }
</style>