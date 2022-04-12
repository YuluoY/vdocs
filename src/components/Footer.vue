<template>
    <div id="footer" class="bg-white w-100">
        <div class="mt-2 text-center d-flex jc-center">
            <a :href="footerInfo.recordInfo.href">
                <div class="d-flex ai-center">
                    <i :class="`${footerInfo.recordInfo.icon} mr-2`"></i>
                    <span>{{ footerInfo.recordInfo.text }}</span>
                </div>
            </a>
            <a :href="footerInfo.copyrightInfo.href">
                <div class="d-flex ai-center mx-3">
                    <i :class="`${footerInfo.copyrightInfo.icon} mr-2 ml-4`"></i>
                    <span>{{ footerInfo.copyrightInfo.text }}</span>
                </div>
            </a>
        </div>
        <div class="text-center d-flex jc-around">
            <a :href="footerInfo.visitInfo.href">
                <div class="d-flex ai-center">
                    <i :class="`${footerInfo.visitInfo.icon} mr-2`"></i>
                    <span>{{ footerInfo.visitInfo.text }}</span>
                </div>
            </a>
            <a :href="footerInfo.runningTimeInfo.href">
                <div class="ml-5 d-flex ai-center">
                    <i :class="`${footerInfo.runningTimeInfo.icon} mr-2`"></i>
                    <span>{{ footerInfo.runningTimeInfo.text }}</span>
                </div>
            </a>
            <a :href="footerInfo.locationInfo.href" target="_blank">
                <div class="ml-5 d-flex ai-center">
                    <i :class="`${footerInfo.locationInfo.icon} mr-2`"></i>
                    <span>{{ footerInfo.locationInfo.text }}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Footer",
        computed: {
            ...mapState({footerInfo: 'footer'})
        },
        mounted() {
            let $ = this.$;
            $('#footer a').click(function (event) {
                event.preventDefault();
                const href = $(this).attr('href');
                if (href !== 'javascript:;') {
                    open(href);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
  #footer {
    //position: absolute;
    line-height: 4rem;
    //bottom: -370px;
    box-shadow: 0px 0px 10px #A7B1C0;
  }

</style>