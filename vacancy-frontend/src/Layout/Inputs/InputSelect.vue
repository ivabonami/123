<template>
  <select v-model="data"
          @change="$emit('dataChanged', data)"
  >
    <option
        :value="vacancy.name"
        v-for="vacancy of vacancies">
      {{ vacancy.name }} ( до 100.000₽ в мес. )
    </option>
  </select>
</template>

<script>
import {vacancies} from "@/Stores/vacancies.js";

export default {
  name: "InputSelect.vue",
  data() {
    return {
      data: 'Комплектовщик',
      vacancies
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>