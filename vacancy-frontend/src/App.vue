<script>
import BaseHeader from './Blocks/BaseHeader.vue';
import HeroBanner from "@/Components/HeroBanner.vue";
import BaseSeparator from "@/Layout/BaseSeparator.vue";
import BaseVacancies from "@/BaseVacancies.vue";
import BaseVacancyItem from "@/BaseVacancyItem.vue";
import {vacancies} from "@/Stores/vacancies.js";
import BaseForm from "@/BaseForm.vue";

export default {
  components: {
    BaseForm,
    BaseHeader,
    HeroBanner,
    BaseSeparator,
    BaseVacancyItem,
    BaseVacancies
  },
  data () {
    return {
      vacancy: vacancies[0],
    }
  },
  methods: {
    vacancyChanged (vacancy) {
      this.vacancy = vacancy
    }
  }
}
</script>

<template>
  <BaseHeader />
  <HeroBanner />

  <BaseSeparator />


  <BaseVacancies
      id="vacancies"
      :active="vacancy"
      @vacancyChanged="emit => vacancyChanged(emit)"
  />

  <BaseVacancyItem
      :data="vacancy"
  />

  <BaseForm
      :data="vacancy"
  />

</template>

