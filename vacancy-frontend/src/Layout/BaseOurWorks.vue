<template>
  <div class="row">
    <div class="our-works">
      <h2> {{ ourWorks.name }}</h2>

      <div class="cards">
        <base-our-works-card
            v-for="(card, index) of ourWorks.cards"
            :data="card"
            :selected="selectedCard"
            @cardSelected="emit => changeCard(emit)"
        />
      </div>

      <div class="text" ref="cardText">
        <p v-if="selectedCardText.topText">
          {{ selectedCardText.topText.text }}
        </p>

        <ul v-if="selectedCardText.list">
          <li v-for="item of selectedCardText.list">{{ item }}</li>
        </ul>
        <p class="description-text"
           v-if="selectedCardText.textDescription"
        >
          {{ selectedCardText.textDescription }}
        </p>

        <p v-if="selectedCardText.bottomText">
          {{ selectedCardText.bottomText.text }}
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import {ourWorks} from "@/Stores/ourWorks.js";
import baseOurWorksCard from "@/Blocks/BaseOurWorksCard.vue";

export default {
  name: "BaseOurWorks.vue",
  data() {
    return {
      ourWorks,
      selectedCard: 0,
      selectedCardText: {}
    }
  },

  watch: {
    ourWorks: function (newVal, oldVal) {
      console.log(newVal)
    }
  },

  components: {
    baseOurWorksCard
  },

  methods: {
    changeCard(card) {
      this.selectedCardText = card.description
      this.selectedCard = card.id

      this.$refs.cardText.scrollIntoView({block: "center", behavior: 'smooth' })

    }
  },

  mounted() {
    this.changeCard(ourWorks.cards[0])
  }

}
</script>

<style scoped lang="scss">
.our-works {
  margin-top: 40px;
  margin-bottom: 40px;

  .cards {
    display: flex;
    gap: 15px;
    width: 100%;
  }

  h2 {
    margin-bottom: 20px;
  }

  .text {
    padding-left: 20px;
    padding-right: 20px;

    p {
      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 14px;
      font-weight: 600;
      font-style: normal;
      line-height: normal;

      &.description-text {
        font-weight: normal;
      }
    }
    ul {
      li {
        color: var(--black, #000);
        font-family: "IBM Plex Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}

@media screen and (max-width: 768px){
  .our-works {
    .cards {
      gap: 0;
      flex-wrap: wrap;
    }
  }
}
</style>