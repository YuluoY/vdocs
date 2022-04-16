<template>
    <div id="AdminMain">
        <el-container style="height: 100vh; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)" v-if="!isMobile">
                <el-menu :default-openeds="['1', '2', '3','4']" :default-active="$route.path" router>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="userList">用户列表</el-menu-item>
                            <el-menu-item index="editUser">编辑用户</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>文章管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="articleList">文章列表</el-menu-item>
                            <el-menu-item index="editArticle">新建文章</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-message"></i>日志管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">日志列表</el-menu-item>
                            <el-menu-item index="3-2">新建日志</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-message"></i>文章分类</template>
                        <el-menu-item-group>
                            <el-menu-item index="categoryList">分类列表</el-menu-item>
                            <el-menu-item index="editCategory">新建分类</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>{{ userInfo.username }}</span>
                    <el-button type="primary" style="margin-left: 2rem;" @click.native.prevent="quit">退出
                    </el-button>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {isMobile} from "@/core/util";

    export default {
        name: "AdminMain",
        data() {
            return {
                isMobile: isMobile(),
                userInfo: JSON.parse(localStorage.getItem('vdocs-userInfo') || '{}')
            }
        },
        methods: {
            quit() {
                this.$message.success(`管理员"${this.userInfo.username}"安全退出！`);
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>