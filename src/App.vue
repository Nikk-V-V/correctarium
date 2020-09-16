<template>
  <div id="app">
    <Header/>
    <main class="main">
      <router-view/>
      <Footer/>
    </main>
  </div>
</template>

<script>

  import Header from "./components/Header";
  import Footer from "./components/Footer";

  export default {
    components: {Footer, Header}
  }
</script>

<style lang="scss">

  .main {
    max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
  }



</style>
