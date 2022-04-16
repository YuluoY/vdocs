<template>
    <div id="articleList">
        <el-card>
            <el-divider content-position="left">文章列表</el-divider>
            <el-collapse accordion style="text-align: left">
                <el-collapse-item v-for="article in articleListData"
                                  :key="article._id"
                                  class="title">
                    <template slot="title">
                        <div class="box">
                            <div>{{ article.title }}</div>
                            <div>{{ article.updateDate | updateDateFormat }}</div>
                        </div>
                    </template>
                    <div style="text-align: right">
                        <el-divider content-position="center">操作</el-divider>
                        <el-button type="primary" @click.native.prevent="editHandle(article)">编辑</el-button>
                        <el-button type="danger" @click.native.prevent="delHandle(article)">删除</el-button>
                    </div>
                    <div>
                        <el-divider content-position="center">描述</el-divider>
                        <div class="desc">&emsp;&emsp;{{ article.desc }}</div>
                    </div>
                    <div>
                        <el-divider content-position="center">内容</el-divider>
                        <div style="width: 75%; margin: 0 auto; padding: 10px">
                            <div v-html="article.content" v-highlight class="content"></div>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
    </div>
</template>

<script>
    import dayjs from "dayjs";
    import '@/assets/css/vue.css'
    // import 'highlight.js/styles/atom-one-dark.css'

    export default {
        name: "ArticleList",
        data() {
            return {
                articleListData: [],
            }
        },
        methods: {
            editHandle(article) {
                this.$router.push({
                    name: 'EditArticle',
                    params: article
                })
            },
            async delHandle(article) {
                if (confirm(`确认删除"${article.title}"文章吗？`)) {
                    const res = await this.$axios.delete(`/rest/article`, {data: {_id: article._id}});
                    console.log(res)
                    await this.fetchArticleList();
                }
            },
            async fetchArticleList() {
                const res = await this.$axios.get(`/rest/article`);
                this.articleListData = {...this.articleListData, ...res.data};
            }
        },
        filters: {
            updateDateFormat(val) {
                return dayjs(val).format('YYYY年MM月DD日 HH:mm:ss')
            },
        },
        created() {
            this.fetchArticleList();
        }
    }
</script>

<style scoped lang="scss">
  .box {
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: 0.8s;
    border-radius: 5px;

    &:hover {
      background-color: #E7ECF1;
    }
  }
</style>