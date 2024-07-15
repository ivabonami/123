<template>
  <div class="heading">
    <h4>Добавить вакансию</h4>
    <div class="close" @click="$emit('closeModal', true)">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L1 13M1 1L13 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
  </div>
  <div class="form">
    <div class="input-control">
      <label for="name">Название вакансии</label>
      <input type="text" id="name" v-model="vacancy.name">
    </div>
    <div class="input-control">
      <label for="price">Зарплата</label>
      <span class="help">
            Просто число
          </span>
      <input type="number" id="price" v-model="vacancy.price">
    </div>
    <div class="input-control">
      <label for="button">Надпись на кнопке</label>
      <span class="help">
            Тут то что будет написано на кнопке снизу карточки
          </span>
      <input type="text" id="button" v-model="vacancy.button">
    </div>
    <div class="input-control">
      <label>Чем предстоит заниматься?</label>
      <span class="help">
            Если нужен список, то разделителем будет точка с запятой: мы хотим что бы вы ...; мы хотим что бы вы ...; итд
          </span>
      <textarea v-model="vacancy.whatToDo"/>
      <div class="typeSelect">
        <label for="whatToDoText">Текст</label>
        <input type="radio" id="whatToDoText" value="text" name="whatToDo" v-model="vacancy.whatToDoType" checked>
        <label for="whatToDoList">Список</label>
        <input type="radio" id="whatToDoList" value="list" v-model="vacancy.whatToDoType" name="whatToDo">
      </div>

    </div>

    <div class="input-control">
      <label>Что мы ожидаем?</label>
      <span class="help">
            Если нужен список, то разделителем будет точка с запятой: мы хотим что бы вы ...; мы хотим что бы вы ...; итд
          </span>
      <textarea v-model="vacancy.weAwait"/>
      <div class="typeSelect">
        <label for="whatWeWantText">Текст</label>
        <input type="radio" id="whatWeWantText" value="text" name="whatWeWant" v-model="vacancy.weAwaitType" checked>
        <label for="whatWeWantList">Список</label>
        <input type="radio" id="whatWeWantList" value="list" name="whatWeWant" v-model="vacancy.weAwaitType">
      </div>

    </div>
    <div class="input-control">
      <input type="file" @change="e => {
            uploadImage.then(result => {
              vacancy.vacancyImage = result.data.filePath
              console.log(result)
            })
          }">
    </div>
    <div class="button" v-if="!loading">
      <button-primary
          :buttonSize="'long'"
          @buttonPressed="sendVacancy"
      >
        <template #button-text>
          Добавить вакансию
        </template>
      </button-primary>
    </div>
  </div>
</template>
<script>
import ButtonPrimary from "@/Layout/Buttons/ButtonPrimary.vue"
import {uploadImage} from "@/API/uploadImage.js";
import {addVacancy} from "@/API/getVacancies.js";
export default {
  name: 'vacancyController',
  components: {ButtonPrimary},
  props: {
    loading: {},
    vacancy: {}
  },
  data() {
    return {
      uploadImage,
      addVacancy,
      loading: false,
      vacancy: {
        "name": null,
        "price": null,
        "button": null,
        "whatToDo": null,
        "whatToDoType": "text",
        "weAwaitType": "text",
        "weAwait": null,
        "image": null,
      }
    }
  },
  methods: {
    sendVacancy() {
      addVacancy(this.vacancy)
      this.$emit('closeModal', true)
    },
  }
}
</script>
<style lang="scss" scoped>
.form {
  .input-control {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    .help {
      color: var(--black, #737373);
      font-family: "IBM Plex Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input {
      width: 100%;
    }
    label {
      width: 100%;

    }
  }
  .typeSelect {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  width: 100%;

  margin-top: 20px;
}
</style>