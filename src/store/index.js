import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navbar: {
            logo: require('@/assets/logo.png'),
            username: '雨落',
            navInfo: ['Home', 'Article', 'Note', 'TimeLine', 'Category', 'Log', 'About', 'GitHub']
        },
        abstractWrapper: [
            {
                title: '田昭迪是什么物种1',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            },
            {
                title: '田昭迪是什么物种2',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            },
            {
                title: '田昭迪是什么物种3',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            },
            {
                title: '田昭迪是什么物种4',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            },
            {
                title: '田昭迪是什么物种5',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            },
            {
                title: '田昭迪是什么物种6',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            },
            {
                title: '田昭迪是什么物种5',
                imgUrl: '@/assets/logo.png',
                author: '雨落',
                date: '2022/04/11',
                category: '技术文章'
            }
        ],
        footer: {
            recordInfo: {
                text: '鄂ICP备2021018528号',
                icon: 'iconfont icon-beian',
                href: 'https://beian.miit.gov.cn/#/'
            },
            copyrightInfo: {
                text: '雨落  2022 - 2023',
                icon: 'iconfont icon-copyright',
                href: 'javascript:;'
            },
            visitInfo: {
                text: '300 人次',
                icon: 'iconfont icon-chakan',
                href: 'javascript:;'
            },
            runningTimeInfo: {
                text: '已运行：0天',
                icon: 'iconfont icon-qiu',
                href: 'javascript:;'
            },
            locationInfo: {
                text: '湖北 孝感',
                icon: 'iconfont icon-didian',
                href: 'https://baike.baidu.com/item/%E5%AD%9D%E6%84%9F/163646?fr=aladdin'
            }
        }
    },
    mutations: {
        setNavbar(state, userInfo) {
            Object.assign(state.navbar, userInfo);
        }
    },
    actions: {},
    modules: {},
});
