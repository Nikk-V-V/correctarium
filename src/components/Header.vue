<template>
  <header class="header">
    <div class="container header__container">
      <div class="container__item flex a-c">
        <router-link to="/" class="logo">
          <img src="../assets/img/cr_logo_w.svg" title="logo" alt="">
        </router-link>
        <nav class="nav__list">
          <router-link to="#" class="list__item">
            Про нас
          </router-link>
          <router-link to="#" class="list__item">
            Ціни
          </router-link>
          <router-link to="#" class="list__item">
            Редактори
          </router-link>
          <router-link to="#" class="list__item">
            Блог
          </router-link>
        </nav>
      </div>
      <div class="container__item flex a-c">
        <div class="button">
          <router-link to="/make-order" class="common_button">
            Перевірити текст
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>


  .header {
    padding: 15px 0 25px;
    background-color: #000000;
    .container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: 60px;
      max-width: 1140px;
      width: 100%;
      padding: 0 15px;
      margin: 0 auto;
      .container__item {
        .button {
          width: 200px;
          height: 40px;
          position: relative;
        }
        .logo {
          padding: 0 16px;
        }
        .nav__list {
          a:hover {
            text-decoration: underline;
          }
          .list__item {
            padding: 5px;
            font-size: 15px;
            font-weight: 600;

          }
        }
      }
    }
    a {
      color: white;
    }
  }

  @media (max-width: 1199px) {
    .header {
      .container {
        max-width: 960px;
      }
    }
  }

  @media (max-width: 991px) {
    .header {
      .container {
        max-width: 720px;
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      .container {
        max-width: 540px;
      }
    }

  }

  @media (max-width: 568px) {
    .header {
      .container {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    .header {
      .container {
        padding: 0;
      }
    }
  }

  @media (max-width: 420px) {

  }

</style>