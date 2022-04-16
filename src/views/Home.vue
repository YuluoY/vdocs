<template>
    <div id="home">
        <Navbar></Navbar>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Main from '@/components/Main'

    export default {
        name: "Home",
        components: {Footer,  Main},
    }
</script>

<style scoped lang="scss">
    #home{
      width: 100vw;
      height: 100vh;
    }
</style>