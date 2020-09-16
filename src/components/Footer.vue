<template>
  <footer class="footer flex a-c">
    <nav class="footer__nav">
      <div class="nav__item">
        <a rel="nofollow" target="_blank" href="https://www.facebook.com/correctarium/">Facebook</a>
      </div>
      <div class="nav__item">
        <a rel="nofollow" href="mailto:manager@correctarium.com">manager@correctarium.com</a>
      </div>
    </nav>
    <div class="lang-switcher">
      <button class="lang__item">Українська</button>
      <button class="lang__item">Русский</button>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 100px;
    height: 100px;
    &__nav {
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .nav__item {
        padding: 8px 15px;
        a {
          text-decoration: none;
          color: #000;
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
    .lang-switcher {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-left: auto;
      .lang__item {
        padding: 8px 15px;
        border: none;
        background-color: rgba(0,0,0,0);
        color: #000;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

</style>