<template>
  <div class="section__item ">
    <h3 class="section__title makeOrder makeOrder--small mb-20">
      Мова
    </h3>
    <div
      class="buttons" v-for="(lang, i) of langList"
      :key="`lang ${i}`"
      @click="selectLang(lang)"
    >
      <div class="buttons__item mb-15">
        <div class="common__radioButton"
             :class="{active: lang.check}"
        >
          <div class="button">
            <div class="circle"></div>
          </div>
          {{lang.lang}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectLang",
    data: function () {
      return {
        langList: [
          {
            lang: 'Українська',
            check: false,
            coef: 0.05,
            langType: 'slav'
          },
          {
            lang: 'Російська',
            check: false,
            coef: 0.05,
            langType: 'slav'
          },
          {
            lang: 'Англійська',
            check: false,
            coef: 0.12,
            langType: 'latin'
          }
        ]
      }
    }
    ,
    methods: {
      selectLang(obj) {
        this.langList.forEach(i => i.check = obj === i)
        this.$emit('select', obj.langType, obj.coef)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .makeOrder--small {
    font-size: 13px;
  }

  .buttons {
    .buttons__item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-transition: .2s;
      -o-transition: .2s;
      transition: .2s;
      .common__radioButton {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 14px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        .button {
          margin-right: 5px;
          border-radius: 50%;
          border: 1px solid #4a90e2;
          width: 13px;
          height: 13px;
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          .circle {
            background-color: #fff;
            border-radius: 50%;
            width: 5px;
            height: 5px;
            opacity: 0;
          }
        }
      }
      .active {
        .button {
          background-color: #4a90e2;
          .circle {
            opacity: 1;
          }
        }
      }
    }
  }
</style>