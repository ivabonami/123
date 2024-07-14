<script>
import BaseHeader from './Blocks/BaseHeader.vue';
import HeroBanner from "@/Components/HeroBanner.vue";
import BaseSeparator from "@/Layout/BaseSeparator.vue";
import BaseVacancies from "@/Layout/BaseVacancies.vue";
import BaseVacancyItem from "@/Layout/BaseVacancyItem.vue";
import {vacancies} from "@/Stores/vacancies.js";
import BaseForm from "@/Layout/BaseForm.vue";
import BaseVideo from "@/Layout/BaseVideo.vue";
import BaseFeatures from "@/Layout/BaseFeatures.vue";
import BaseOurWorks from "@/Layout/BaseOurWorks.vue";
import BaseCarousel from "@/BaseCarousel.vue";
import BaseFaq from "@/BaseFaq.vue";
import BaseFooter from "@/BaseFooter.vue";


export default {
  components: {
    BaseFooter,
    BaseFaq,
    BaseCarousel,
    BaseFeatures,
    BaseVideo,
    BaseForm,
    BaseHeader,
    HeroBanner,
    BaseSeparator,
    BaseVacancyItem,
    BaseVacancies,
    BaseOurWorks
  },
  data () {
    return {
      vacancy: vacancies[0],
    }
  },
  methods: {
    vacancyChanged (vacancy) {
      this.vacancy = vacancy
      this.$refs.vacancyItem.scrollIntoView({block: "start",  behavior: "smooth" });
    },
    scroll () {
      this.$refs.vacancyItem.scrollIntoView({block: "center", behavior: "smooth" });
    }
  }
}
</script>

<template>
  <BaseHeader
      id="top"
  />
  <HeroBanner />

  <BaseSeparator />


  <BaseVacancies
      id="vacancies"
      ref="vacancies"
      :active="vacancy"
      @vacancyChanged="emit => vacancyChanged(emit)"
  />

  <div ref="vacancyItem"></div>

  <BaseVacancyItem
      :data="vacancy"

  />

  <BaseForm
      id="form"
      :data="vacancy"
  />

  <BaseVideo />

  <BaseFeatures />

  <BaseOurWorks />

  <BaseCarousel />


  <BaseFaq />

  <BaseFooter
      @scrollToVacancies="scroll()"
  />

</template>

