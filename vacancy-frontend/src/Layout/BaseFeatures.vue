<template>
  <div class="row">
    <div class="features">
      <h2>{{ features.name }}</h2>

      <div class="features_cards">
        <base-features-card
            :items="card.description"
            v-for="card of features.cards" >

          <template #icon>
            <img :src="card.icon" alt="">
          </template>

          <template #heading>
            {{ card.heading }}
          </template>


        </base-features-card>
      </div>
    </div>






  </div>
</template>
<script>
import {features} from "@/Stores/features.js";
import baseFeaturesCard from "@/Blocks/BaseFeaturesCard.vue";

export default {
  name: 'BaseFeatures',
  components: {
    baseFeaturesCard
  },
  data() {
    return {
      features
    }
  }
}
</script>
<style lang="scss" scoped>
.features {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  h2 {
    width: 100%;
  }

  .features_cards {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
  }
}

@media screen and (max-width: 768px){
  .features {
    .features_cards {
      flex-wrap: wrap;
    }
  }
}
</style>