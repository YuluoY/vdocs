<template>
    <div id="editCategory">
        <el-card>
            <el-divider content-position="left">{{ title }}</el-divider>
            <el-form>
                <el-form-item label="父级类别" required style="text-align: left">
                    <el-select v-model="model.parent" multiple placeholder="请选择父级类别">
                        <el-option
                                v-for="item in categories"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="类别名称" required>
                    <el-input v-model="model.name" placeholder="请输入类别名称"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click.native.prevent="save">提交</el-button>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "EditCategory",
        data() {
            return {
                title: '新建分类',
                name: '',
                parentIdArr: [],
                model: {},
                categories: [],
            }
        },
        methods: {
            async save() {
                let res = null,
                    msg = `"${this.model.name}"分类编辑成功！`;
                if (this.title === '编辑分类') {
                    res = await this.$axios.put('/rest/category', {
                        condition: {_id: this.model._id},
                        modify: this.model
                    })
                } else {
                    res = await this.$axios.post('/rest/category', this.model);
                    msg = `"${this.model.name}"分类新建成功！`;
                }
                if (res) {
                    this.$message.success(msg);
                    this.model = {};
                    await this.$router.push('/categoryList');
                }
            },
            async fetchData() {
                const res = await this.$axios.get('/rest/category');
                this.categories = res.data;
            }
        },
        created() {
            this.fetchData();
            if (JSON.stringify(this.$route.params) !== '{}') {
                this.model = this.$route.params;
                this.title = '编辑分类';
            }
        }
    }
</script>

<style scoped>

</style>