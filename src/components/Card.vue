<template>
    <div id="Card" class="div1">
        <div class="box">
            <div class="px-4 py-2 pb-3 mt-2">
                <div class="title">
                    <h2>{{ $attrs.title }}</h2>
                </div>
                <div>
                    <img :src="$attrs.imgUrl">
                </div>
                <div class="d-flex pt-0 flex-wrap">
                    <div class="mr-4 my-1 d-flex ai-center">
                        <i class="iconfont icon-zuozhe- mr-1"></i>
                        <span class="author">{{ $attrs.author }}</span>
                    </div>
                    <div class="mr-4 my-1 d-flex ai-center">
                        <i class="iconfont icon-ic_calendar mr-1"></i>
                        <span class="date">{{ $attrs.date }}</span>
                    </div>
                    <div class="mr-4 my-1 d-flex ai-center">
                        <i class="iconfont icon-category mr-1"></i>
                        <span class="category">{{ $attrs.category }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  #Card {
    transition: 0.45s;
    background-color: white;
    box-shadow: 0px 0px 5px map-get($colors, 'grey-1');

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px map-get($colors, 'grey-1');
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