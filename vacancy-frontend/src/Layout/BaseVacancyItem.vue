<template>
  <div class="row">
    <div class="profession-info" v-if="data">
      <h2>{{ data.name }}, от {{ data.price }} ₽</h2>

      <div class="profession">
        <div class="whatToDo">
          <h3>Чем предстоит заниматься:</h3>
          <ul v-if="data.whatToDo.type === 'list'">
            <li v-for="item of data.whatToDo.items">
              {{ item }}
            </li>
          </ul>
          <div v-else>
            {{ data.whatToDo }}
          </div>
        </div>
        <div class="weAwait">
          <h3>Мы ожидаем:</h3>
          <ul v-if="data.weAwait.type === 'list'">
            <li v-for="item of data.weAwait.items">
              {{ item }}
            </li>
          </ul>
          <div v-else>
            {{ data.weAwait }}
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import {vacancies} from "@/Stores/vacancies.js";
export default {
  props: {
    data: null
  },
  name: 'BaseVacancyItem',
  data() {
    return {
      vacancies
    }
  }


}
</script>

<style lang="scss" scoped>
.profession-info {
  margin-top: 10px;
  width: 100%;

  .profession {
    margin-top: 20px;

    color: var(--black, #000);
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 80px;
    justify-content: space-between;


    .weAwait, .whatToDo {
      flex-basis: 50%;
      width: 100%;

      ul {
        padding-left: 0;
        margin-left: 30px;
      }
    }
  }

}
@media screen and (max-width: 768px){
  .profession-info{
    .profession {
      flex-wrap: wrap;
      width: 100%;
      gap: 10px;

      .weAwait, .whatToDo {
        width: 100%;
        flex-basis: 100%;
      }
    }

  }
}
</style>