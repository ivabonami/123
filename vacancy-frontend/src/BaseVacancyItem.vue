<template>
  <div class="row">
    <div class="profession-info">
      <h2>{{ data.name }}</h2>

      <div class="profession">
        <div class="whatToDo">
          <h3>Чем предстоит заниматься:</h3>
          <ul v-if="data.data.whatToDo.type === 'list'">
            <li v-for="item of data.data.whatToDo.items">
              {{ item }}
            </li>
          </ul>
          <div v-else>
            {{ data.data.whatToDo.items[0] }}
          </div>
        </div>
        <div class="weAwait">
          <h3>Мы ожидаем:</h3>
          <ul v-if="data.data.weAwait.type === 'list'">
            <li v-for="item of data.data.weAwait.items">
              {{ item }}
            </li>
          </ul>
          <div v-else>
            {{ data.data.weAwait.items[0] }}
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
</style>