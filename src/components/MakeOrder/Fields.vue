<template>
  <div class="section__item">
    <h3 class="section__title makeOrder mb-20">Замовити редагування</h3>
    <p class="section__p small">
            <span>Виправимо всі помилки, приберемо всі дурниці, перефразуємо невдалі місця, але сильно текст
              <span class="no-wrap">не переписуватимемо.</span>
              Зайвих виправлень не буде.
            </span>
      <router-link to="#">
        Детальніше про редагування
      </router-link>
    </p>
    <div class="fields__row mb-10 required">
      <input
        type="email"
        placeholder="Ваша ел. пошта"
        class="common__input auto"
      >
    </div>
    <div class="fields__row mb-10">
      <input
        type="text"
        placeholder="Ваше ім`я"
        class="common__input auto">
    </div>
    <div class="area">
            <textarea
              :disabled="areaDisabled"
              @keyup="writeText"
              v-model="text"
              placeholder="Введіть тескт або "
              class="area__text"
            >
            </textarea>
      <label
        :hidden="hide"
        class="area__download"
      >
        завантажте файл
        <input
          @change="onFileSelect($event)"
          class="input" type="file"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip">
      </label>
      <div
        v-html="text.length"
        class="area__symbols"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Fields",
    data() {
      return {
        text: '',
        hide: false,
        areaDisabled: false,
        fileTextLength: 0
      }
    },
    methods: {
      writeText() {
        this.hideInput()
        this.$emit('write', this.text)
      },
      onFileSelect(e) {
        const file = e.target.files[0]
        if (file) {
          this.fileTextLength = file.size / 5
          this.areaDisabled = !!file
          if (this.fileTextLength > 0) {
            this.$emit('fileS', this.fileTextLength.toFixed(0))
          }
        } else  {
          this.areaDisabled = false
          this.$emit('fileS', 0)
        }
      },
      hideInput() {
        this.text.length > 0 ? this.hide = true : this.hide = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .makeOrder__item {
    .area {
      position: relative;
      &__text {
        resize: none;
        width: 100%;
        min-height: 250px;
        border-radius: 2px;
        border: 1px solid #eaeaea;
        outline: none;
        padding: 10px;
        &:focus {
          border-color: #4a90e2;
        }
      }
      &__download {
        position: absolute;
        top: 11px;
        left: 155px;
        color: #4a90e2;
        cursor: pointer;
        input {
          display: none;
        }
      }
      &__symbols {
        position: absolute;
        bottom: -12px;
        left: 2px;
        color: #999;
        font-weight: 700;
        font-size: 12px;
        background-color: #fff;
      }
    }
  }
</style>