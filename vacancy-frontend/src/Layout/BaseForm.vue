<template>
  <div class="row">
    <div class="form">
      <h3>Начните работать в компании, заполнив простую анкету</h3>
      <div class="form-control">
        <div class="fields">
          <input-text
              @dataChanged="emit => formData.name = emit"
              :required="true"
              :data="formData.name"
          />
          <input-number
              @dataChanged="emit => formData.phone = emit"
              :required="true"
              :data="formData.phone"
          />
          <input-email
              @dataChanged="emit => formData.email = emit"
              :required="false"
              :data="formData.email"
          />
          <input-select
              :required="true"
              @dataChanged="emit => formData.vacancy = emit"
              :data="formData.vacancy"
          />
        </div>
        <div class="fields">
          <InputCheckbox
              @dataChanged="emit => policyValidator(emit)"
          />
          <button-primary @click="checkForm(formData)" :button-size="'long'">
            <template #button-text>
              Начать работу в компании
            </template>
          </button-primary>
        </div>

        <div class="errors" v-show="Object.keys(errors).length > 0">
          <div class="heading">Устраните ошибки</div>
          <div v-for="error in errors"
              class="error"
          >
            <div class="error-text" v-if="Object.keys(error).length > 0">
              {{ error }}
            </div>

          </div>

        </div>


      </div>
    </div>
  </div>
</template>
<script>
import InputText from "@/Layout/Inputs/InputText.vue";
import inputEmail from "@/Layout/Inputs/InputEmail.vue";
import inputNumber from "@/Layout/Inputs/InputNumber.vue";
import inputSelect from "@/Layout/Inputs/InputSelect.vue";
import buttonPrimary from "@/Layout/Buttons/ButtonPrimary.vue";
import InputCheckbox from "@/Layout/Inputs/InputCheckbox.vue";
import sendForm from "@/API/sendForm.js";


export default {
  name: 'BaseForm',
  components: {
    InputCheckbox,
    InputText,
    inputNumber,
    inputEmail,
    inputSelect,
    buttonPrimary
  },
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        email: null,
        vacancy: null,
      },
      errors: {}
    }
  },
  methods: {
    phoneValidator(data) {
      if (data === null) {
        this.errors.phoneEmpty = 'Вы не ввели номер телефона'
      } else if (data.length <= 17) {
        delete this.errors.phoneEmpty
        this.errors.phoneLength = 'Введите верный номер телефона'
      } else {
        delete this.errors.phoneLength
        delete this.errors.phoneEmpty
      }
    },
    nameValidator(data) {
      if (data === null || data === '') {
        this.errors.nameEmpty = 'Вы не ввели имя'
      } else {
        delete this.errors.nameEmpty
      }
    },
    policyValidator(data) {
      !data ? this.errors.policy = 'Подтвердите согласие на обработку персональных данных' : delete this.errors.policy
    },

    checkForm(data) {
      this.phoneValidator(data.phone)
      this.nameValidator(data.name)

      this.sendAfterCheck(data)
    },


    sendAfterCheck(data) {
      if (Object.keys(this.errors) <= 0) {
        console.log(data)
        sendForm(data)
      } else {

      }

    }
  }

}
</script>

<style scoped lang="scss">
.form {
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 14px;
  margin-top: 20px;

  .form-control {
    .fields {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
    }
  }
  .errors {
    .heading {
      color: var(--black, rgba(178, 9, 49, 0.8));
      font-family: "IBM Plex Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 142.857% */
    }
    .error {
      .error-text {
        color: var(--black, rgba(178, 9, 49, 0.8));
        font-family: "IBM Plex Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}

@media screen and (max-width: 768px){
  .form {
    .errors {
      .heading {
        font-size: 18px;
        margin-bottom: 0px;
        line-height: 1.5;

      }
      .error {
        .error-text  {
          font-size: 14px;
        }
      }
    }
    .form-control {
      .fields {
        flex-wrap: wrap;
        gap: 10px;
        .input-control {
          width: 100%;
        }
      }
    }

  }
}
</style>