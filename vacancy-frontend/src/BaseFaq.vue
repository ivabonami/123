<template>
  <div class="row">
    <div class="faq">
      <h2> {{ faq.heading }}</h2>
      <div class="faq-items">
        <BaseFaqItem :item="item"
                     v-for="item of faq.items" />
      </div>
    </div>
  </div>
</template>
<script>
import {faq} from "@/Stores/faq.js";
import BaseFaqItem from "@/Blocks/BaseFaqItem.vue";

export default {
  name: 'BaseFaq',
  components: {BaseFaqItem},
  data() {
    return {
      faq
    }
  }
}
</script>
<style lang="scss" scoped>
.faq {
  margin-top: 40px;
  width: 100%;

  .faq-items {
    margin-top: 20px;
    width: 100%;
  }
}


</style>