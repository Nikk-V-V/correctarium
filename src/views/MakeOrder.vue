<template>
  <form class="makeOrder">
    <div class="makeOrder__item">
      <section class="section">
        <Fields
          :params="price, executionTime, coef, text"
          @write="write"
          @fileS="fileSelected"
        />
      </section>
      <section class="section mt-40">
        <SelectLang
          :params="coef, langType, text, fileTextLength"
          @select="select"
        />
      </section>
      <section class="section mt-40">
        <div class="section__item ">
          <div class="fields">
            <div class="fields__row">
              <input
                class="common__input auto"
                placeholder="Стислий коментар або покликання"
              ></div>
          </div>
        </div>
      </section>
    </div>
    <div class="makeOrder__item">
      <div class="submit">
        <div class="submit__content">
          <div class="content__price">
            <div v-html="`${price.toFixed(2)} грн`" class="number"> грн</div>
            <div v-html="executionTime" class="time">
            </div>
          </div>
          <div class="button">
            <button type="submit" disabled class="common_button disabled">Замовити</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

  import Fields from "../components/MakeOrder/Fields";
  import SelectLang from  "../components/MakeOrder/SelectLang"
  import moment from 'moment'



  export default {
    name: "MakeOrder",
    data: () => ({
      price: 0.00,
      coef: 0,
      langType: '',
      areaDisabled: false,
      executionTime:'',
      text: '',
      fileTextLength: 0,
    }),
    methods: {
      select(langType, coef) {
        this.coef = coef
        this.langType = langType
        if (this.text.length > 0) this.priceCalculate(this.text.length, this.coef)
        else if (this.fileTextLength > 0) this.priceCalculate(this.fileTextLength, this.coef)
      },
      write(text) {
        this.text = text
        if (text.length > 0) {
          if (this.coef) this.priceCalculate(text.length, this.coef)
        } else {
          this.price = 0
          this.executionTime = ''
        }
      },
      fileSelected(length) {
        this.fileTextLength = length
        if (length) {
          if (this.coef) this.priceCalculate(length, this.coef)
        } else {
          this.price = 0
          this.executionTime = ''
        }
      },
      priceCalculate(length = 0, coefficient = 0) {
        if (length > 1000)
          this.price = coefficient ? length * coefficient : length
        else {
          this.langType === 'slav' ? this.price = 50 : this.price = 120
        }
        this.setTime(length, moment())
      },
      setTime(length, m) {
        const iterationCount = this.langType === 'slav' ? length / 666.5 : length / 166.5
        let time = m.clone()
        time.set({hour: time.hour() + 1, minute: 0})
        if (time.hour() >= 19) time.set({hour: 10, date: time.date() + 1})
        if (time.day() === 6) time.add(2, 'day')
        if (time.day() === 0) time.add(1, 'day')
        for (let i = 0; i < iterationCount; i++) {
          time.add(30, 'minute')
          if (time.hour() >= 19) {time.set({hour: 10, date: time.date() + 1, minute: 0})}
          if (time.day() === 6) time.add(2, 'day')
        }
        if (time.hour() === m.hour() + 1 && time.date() === m.date()) {
          this.executionTime = `Здамо за: одну годину`
        } else if (time.hour() === m.hour() + 2 && time.date() === m.date()) {
          this.executionTime = `Здамо за: дві години`
        } else if (time.hour() === m.hour() + 3 && time.date() === m.date()) {
          this.executionTime = `Здамо за: три години`
        } else {
          this.executionTime = `Термін виконання: ${time.format('L')} о ${time.format('LT')}`
        }
      }
    },
    components: {
      SelectLang,
      Fields
    }
  }

</script>

<style lang="scss" scoped>

  .makeOrder {
    display: grid;
    grid-template-columns: 75% auto;
    grid-gap: 20px;
  }


  .makeOrder__item {
    .submit {
      position: relative;
      height: 100%;
      &__content {
        position: -webkit-sticky;
        position: sticky;
        top: 10px;
        margin-top: 93px;
        border-top: 1px solid #eaeaea;
      }
      .content__price {
        padding: 0 20px;
        margin-top: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        .number {
          color: #333;
          font-size: 22px;
          font-weight: 700;
        }
        .time {
          color: #999;
          font-size: 15px;
          margin-bottom: 10px;
          min-height: 17px;
        }
      }
      .button {
        width: 100%;
        height: 35px;
        position: relative;
        .common_button {
          &:disabled {
            cursor: auto;
            background-color: #1b5dab;
          }
        }
      }
    }
  }

</style>