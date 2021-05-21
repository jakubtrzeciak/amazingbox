<template>
  <div class="email">
    <form @submit="sendMail($event)">
      <label>
        <span v-if="values.name.value == ''">* Pole obowiązkowe</span>
        <span v-else-if="values.name.value.length < 3" class="red">
        * Wprowadź conajmniej 3 znaki</span>
        <input type="text" placeholder="Nazwa użytkownika / Imię" v-debounce:1s="validateEmail"
        v-model="values.name.value">
      </label>
      <label>
        <span v-if="values.email.value == ''">* Pole obowiązkowe</span>
        <span v-else-if="checkEmail(values.email.value) === false" class="red">
        * Wprowadź prawidłowy adres e-mail</span>
        <input type="email" placeholder="Adres e-mail" v-debounce:500ms="validateEmail"
        debounce-events="input" v-model="values.email.value">
      </label>
      <label>
      <span v-if="values.message.value == ''">* Pole obowiązkowe</span>
      <span v-else-if="values.message.value.split(' ').length < 6" class="red">
      * Wprowadź conajmniej 5 słów</span>
      <input type="text" placeholder="Wpisz treść wiadomości..." v-debounce:500ms="validateEmail"
      debounce-events="input" v-model="values.message.value">
      </label>
      <label>
        <span v-if="values.agreement == false">* Pole obowiązkowe</span>
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input class="uk-checkbox" type="checkbox" @change="validateEmail()"
            v-model="values.agreement">
            Wyrażam zgodę na przetwarzanie moich danych osobowych, zgodnie z <a href="#">polityką
            prywatności</a>, w celu udzielenia odpowiedzi na powyższą wiadomość.</label>
        </div>
      </label>
      <input type="submit" value="Wyślij" :disabled="validateEmail() === false"
      :class="{ active: validateEmail() }">
    </form>
    <div class="uk-tile uk-padding-small uk-margin">
        <p class="uk-h4" v-if="valid">Wiadomość została wysłana pomyślnie :)</p>
        <p class="uk-h4" v-if="valid === true && error !== ''">Błąd wysyłania wiadomości.
        Odśwież stronę i spróbuj ponownie.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Email',
  data() {
    return {
      valid: false,
      res_value: '',
      error: '',
      values: {
        name: {
          value: '',
          valid: false,
        },
        email: {
          value: '',
          valid: false,
        },
        message: {
          value: '',
          valid: false,
        },
        agreement: false,
        email_valid: false,
      },
    };
  },
  methods: {
    checkEmail(x) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(x).toLowerCase());
    },
    validateEmail() {
      if (this.values.name.value !== '' && this.values.name.value.length >= 3) {
        this.values.name.valid = true;
      } else this.values.name.valid = false;

      if (this.values.email !== '' && this.checkEmail(this.values.email.value)) {
        this.values.email.valid = true;
      } else this.values.email.valid = false;

      if (this.values.message.value !== '' && this.values.message.value.split(' ').length > 5) {
        this.values.message.valid = true;
      } else this.values.message.valid = false;

      if (this.values.name.valid && this.values.email.valid && this.values.message.valid
      && this.values.agreement) {
        this.values.email_valid = true;
      } else this.values.email_valid = false;

      return this.values.email_valid;
    },
    sendMail(event) {
      event.preventDefault();
      if (this.validateEmail()) {
        const res = JSON.parse(this.$func.sendMail(this.values.name.value,
          this.values.email.value, this.values.message.value));

        if (res) {
          this.valid = res.data.valid;
          this.res_value = res.data.value;

          if (res.data.valid === false) {
            this.error = res.data.error;
            console.log(res.data.error);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
    div.email {
        width: 100%;
        margin: 1em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 768px) {
            width: 90%;
        }

        label > span{
          display: block;
          font-size: .8em;

          &.red {
            color: #900000;
          }
        }

        input[type=text], input[type=email] {
            width: 100%;
            background: none;
            border: none;
            border-bottom: 1.7px solid #3b3b3b;
            box-sizing: border-box;
            padding: 10px 15px;
            margin: 0 0 15px 0;
            font-size: 1em;

            &.zeroMargin {
              margin-top: 0;
            }
        }

        input[type=checkbox] {
          margin-right: 10px;
        }

        label {
            width: 100%;
            text-align: left;

            a {
              color: #900000;
            }

            .uk-margin {
              margin-top: 5px !important;
            }
        }

        input[type=submit] {
          width: 100%;
          padding: 13px 0;
          text-align: center;
          background-color: #707070;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.3em;

          &.active {
            background-color: #900000;
            cursor: pointer;
          }
        }
    }

    .uk-checkbox {
      border-color: #900000;

      &:checked {
        background-color: #900000;
      }
    }
</style>
