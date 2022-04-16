<template>
    <div>
        <waterfall :col="col" :data="data" class="mt-3">
            <!--  @loadmore="loadmore"
                @scroll="scroll" -->
            <div @click="toPage" class="cell-item div1" v-for="(item, index) in data" :key="index">
                <img class="bigImg py-1 px-1" v-lazy="item.imgSrc" alt="加载错误"/>
                <div class="item-body">
                    <div class="item-title fs-lg">{{ item.title }}</div>
                    <div class="item-detail py-3">
                        <span>
                            {{ '人生而自由，而无往不在枷锁之中。'.repeat(Math.ceil(Math.random() * 15)) }}
                        </span>
                        <span class="spread" @click.stop="spreadDetail">展开</span>
                    </div>
                    <div class="item-footer">
                        <div class="footer-left py-4 d-flex jc-start ai-center fs-xxs flex-wrap">
                            <!-- <img :src="item.avatar" alt="" srcset=""/>-->
                            <div class="name">
                                <i :class="item.icons.authorIcon"></i>
                                <span class="ml-1">{{ item.author }}</span>
                            </div>
                            <div class="date ml-0">
                                <i :class="item.icons.dateIcon"></i>
                                <span class="ml-1">{{ item.date }}</span>
                            </div>
                            <div class="category ml-0">
                                <i :class="item.icons.categoryIcon"></i>
                                <span class="ml-1">{{ item.category }}</span>
                            </div>
                            <div class="views ml-0">
                                <i :class="item.icons.viewsIcon"></i>
                                <span class="ml-1">{{ item.viewsNum }}</span>
                            </div>
                        </div>
                        <i class="iconfont icon-remen hot" v-if="item.viewsNum >= 300"></i>
                        <!--                        <div class="like">-->
                        <!--                            <img src="../assets/images/300924.jpg" alt=""/>-->
                        <!--                            <div class="like-total">{{ item.vote_num }}</div>-->
                        <!--                        </div>-->
                    </div>
                </div>
            </div>
        </waterfall>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                col: 4,
            };
        },
        methods: {
            spreadDetail(event) {
                const text = this.$(event.target).text();
                this.$(event.target).siblings().css({
                    'overflow': text === '展开' ? 'unset' : 'hidden',
                    'line-clamp': text === '展开' ? 'none' : '3',
                    '-webkit-box-orient': text === '展开' ? 'unset' : 'vertical',
                    'text-overflow': text === '展开' ? 'unset' : 'ellipsis',
                });
                text === '展开' ? this.$(event.target).text('收起') : this.$(event.target).text('展开');
            },
            toPage() {
                console.log(1);
            }
        },
        mounted() {

        }
    };
</script>
<style lang="scss" scoped>
  @import "../assets/scss/variables";

  .item-body {
    margin: 1rem;

    .hot {
      position: absolute;
      top: -0.1rem;
      right: 1rem;
      font-size: 2rem;
      color: red;
    }

    .item-title {
      text-align: left;
      color: #000000;
      font-weight: bolder;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    }

    .item-detail {
      span {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        line-height: 1.5rem;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        font-family: "Microsoft Himalaya";
      }

      .spread {
        position: absolute;
        color: coral;
        z-index: 999999;
        transition: 0.4s;

        &:hover {
          cursor: pointer;
          color: #41B883;
        }
      }
    }

    .item-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .footer-left {
        width: 80%;
        display: flex;
        justify-content: space-between;
        color: rgba(0, 0, 0, 0.6);

        div {
          width: 6rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        img {
          border-radius: 50%;
          width: 22px;
          height: 22px;
          margin-right: 4px;
        }
      }

      .like {
        display: flex;
        justify-content: center;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.4);

        img {
          margin-right: 4px;
        }
      }
    }
  }

  .cell-item {
    width: 90%;
    margin: 2rem auto;
    background: #ffffff;
    border-radius: 6px;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px map-get($colors, 'grey-1');
    transition: width 0.7s;

    &:hover {
      box-shadow: 0px 0px 24px map-get($colors, 'grey-1');
      width: 100%;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .div1 {
    position: relative;
  }

  .div1:before, .div1:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 2px solid transparent;
    box-sizing: border-box;
    position: absolute;

  }

  .div1:before {
    top: 0;
    left: 0;
    transition: border-color 0s ease-in 0.8s, width 0.2s ease-in 0.6s, height 0.2s ease-in 0.4s;
  }

  .div1:after {
    right: 0;
    bottom: 0;
    transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.2s, height 0.2s ease-in;
  }

  .div1:hover:before {
    width: 100%;
    height: 100%;
    transition: width 0.2s ease-in, height 0.2s ease-in 0.2s;
    border-top-color: #41B883;
    border-right-color: #41B883;
  }

  .div1:hover:after {
    width: 100%;
    height: 100%;
    transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.4s, height 0.3s ease-in 0.6s;
    border-bottom-color: #41B883;
    border-left-color: #41B883;
  }
</style>

