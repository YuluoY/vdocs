<template>
    <div id="mainSideBar">
        <div class="sideBox">
            <div class="d-flex flex-column ai-center mt-5">
                <img class="sideLogo" src="../assets/logo.png"/>
                <p class="sideName fs-lg">雨落</p>
            </div>
            <div class="d-flex ai-center jc-around totalNum mt-2">
                <div>
                    <span class="fs-lg">20</span>
                    <figcaption class="fs-xs">Articles</figcaption>
                </div>
                <div>
                    <span class="fs-lg">20</span>
                    <figcaption class="fs-xs">Articles</figcaption>
                </div>
                <div>
                    <span class="fs-lg">20</span>
                    <figcaption class="fs-xs">Articles</figcaption>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainSideBar"
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  #mainSideBar {
    position: absolute;
    width: 20rem;
    background-color: white;
    box-shadow: 0px 0px 5px map-get($colors, 'grey-1');
    right: 11.5rem;
    top: 2.5rem;
    height: 100%;
    transition: 0.6s;

    &:hover {
      box-shadow: 0px 0px 20px map-get($colors, 'grey-1');
    }

    .sideBox {
      width: 100%;

      .sideLogo {
        width: 5rem;
        background-color: map-get($colors, 'grey');
        border-radius: 50%;
        margin: 0 auto;
      }
    }

    .totalNum {
      width: 100%;

      div {
        text-align: center;
        display: inline-block;
      }

      hr {
        width: 1px;
        background-color: map-get($colors, 'grey');
        border: none;
        height: 2rem;
      }
    }
  }
</style>