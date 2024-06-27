<template>
  <div class="row">
    <div class="vacancy">
      <h2>Наши Вакансии</h2>

      <div class="vacancies-cards">
        <div
            v-for="vacancy of vacancies"
            class="card">
          {{ vacancy }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {vacancies} from "@/Stores/vacancies.js";

export default {
  name: 'BaseVacancies',
  data () {
    return {
      vacancies
    }
  }
}
</script>

<style lang="scss" scoped>

.vacancy {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>