<template>
    <div id="card-pagination">
        <Card v-for="(item, i) in abstractWrapperTemp" :key="i"
              :title="item.title"
              :author="item.author"
              :date="item.date"
              :category="item.category">
        </Card>
        <div class="d-flex ai-center jc-center">
            <div class="paginationBtn d-flex jc-center mx-3 ai-center">
                <button
                        :class="n===1?'paginationBtnActive':''"
                        @click="goPagination(n, $event)"
                        v-for="(n,i) in Math.ceil(abstractWrapper.length/paginationNum)" :key="i">
                    {{ n }}
                </button>
            </div>
            <div class="d-flex ai-center my-4">
                <div>
                    <button class="next" @click="goPagination(currPagination+1)">Next</button>
                </div>
                <div class="d-flex jump">
                    <span class="mx-2">Jump to</span>
                    <input v-model.number="currPagination"
                           @blur.once="goPagination(currPagination)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card'

    export default {
        name: "CardPagination",
        components: {Card},
        props: ['abstractWrapper'],
        data() {
            return {
                paginationNum: 5,
                currPagination: 1,
                abstractWrapperTemp: [],
            }
        },
        methods: {
            goPagination(n) {
                if (n > Math.ceil(this.abstractWrapper.length / this.paginationNum)) {
                    n = 1;
                }
                n *= 1;
                this.currPagination = n * 1;
                this.abstractWrapperTemp = this.abstractWrapper.slice((n - 1) * this.paginationNum, n * this.paginationNum);
                this.$('.paginationBtn button').each((i, item) => {
                    if ((item.innerText * 1) === n) {
                        this.$(item).addClass('paginationBtnActive');
                        this.$(item).siblings().removeClass('paginationBtnActive');
                        let y = scrollY;
                        clearInterval(this.timer);
                        this.timer = setInterval(() => {
                            if (scrollY <= 0) {
                                clearInterval(this.timer);
                            }
                            scrollTo(0, y);
                            y -= 10;
                        }, 10)
                        item.click();
                        return;
                    }
                })
            },
        },
        computed:{

        },
        mounted() {
            console.log(Math.ceil(this.abstractWrapper.length/this.paginationNum))
        },
        beforeMount() {
            this.abstractWrapperTemp = this.abstractWrapper.slice(0, this.paginationNum);
        }
    }
</script>

<style scoped lang="scss">
  .paginationBtn {

    button {
      background-color: white;
      border: solid 1px;
      padding: 0.4rem 0.8rem;
      margin-right: 0.5rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .jump {
    input {
      text-align: center;
      width: 2rem;
      outline: none;
    }
  }

  .next {
    background-color: white;
    border: solid 1px;
    padding: 0.4rem 0.8rem;
    margin-right: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    transition: 0.5s;
  }

  .paginationBtnActive {
    background-color: #41B883 !important;
  }
</style>