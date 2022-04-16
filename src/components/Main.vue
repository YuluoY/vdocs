<template>
    <div id="main" class="d-flex jc-center">
        <div class="container">
            <div class="waterfall">
                <my-waterfall :data="cardList"></my-waterfall>
            </div>
        </div>
    </div>
</template>

<script>
    import MyWaterfall from "@/components/MyWaterfall";
    import {mapState} from "vuex";

    export default {
        name: "Main",
        components: {MyWaterfall},
        data() {
            return {
                isMobile: false,
                cardList: [
                    {
                        imgSrc: require("@/assets/images/1.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "雨落",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "JavaScript高级",
                    },
                    {
                        imgSrc: require("@/assets/images/1.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "雨落",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "JavaScript高级",
                    },
                    {
                        imgSrc: require("@/assets/images/1.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "雨落",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "JavaScript高级",
                    },
                    {
                        imgSrc: require("@/assets/images/1.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "雨落",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "JavaScript高级",
                    },
                    {
                        imgSrc: require("@/assets/images/2.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "雨落",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "关于解决ES6模块化",
                    },
                    {
                        imgSrc: require("@/assets/images/3.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "阿三打撒打撒打撒的撒旦啊实打实打算大苏打",
                    },
                    {
                        imgSrc: require("@/assets/images/4.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "Let’s run together",
                    },
                    {
                        imgSrc: require("@/assets/images/5.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "Work from home is so boring",
                    },
                    {
                        imgSrc: require("@/assets/images/6.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "",
                    },
                    {
                        imgSrc: require("@/assets/images/7.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "New Sneaker has just arrived",
                    },
                    {
                        imgSrc: require("@/assets/images/8.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "Good smart charger ",
                    },
                    {
                        imgSrc: require("@/assets/images/9.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "Good smart charger ",
                    },
                    {
                        imgSrc: require("@/assets/images/10.jpg"),
                        avatar: require("@/assets/logo.png"),
                        icons: {
                            authorIcon: 'iconfont icon-zuozhe-',
                            dateIcon: 'iconfont icon-ic_calendar',
                            categoryIcon: 'iconfont icon-category',
                            viewsIcon: 'iconfont icon-chakan'
                        },
                        viewsNum: Math.ceil(Math.random() * 400),
                        author: "Lewis",
                        date: '2022/04/12',
                        category: '技术文章',
                        vote_num: 999,
                        title: "",
                    },
                ],
            }
        },
        methods: {},
        computed: {
            ...mapState({abstractWrapper: 'abstractWrapper'})
        },
        beforeMount() {
            // this.isMobile = isMobile();
            // for (let i = 0; i < 10; i++) {
            //     this.abstractWrapper.push({title: '田昭迪是什么物种', author: '雨落' + i, date: '2022/04/11', category: '技术文章'});
            // }
        }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
  }

  /* #main {
     width: 100vw;

     .card-list {
       width: 50%;
       position: absolute;
       left: 12rem;
     }
   }*/
</style>