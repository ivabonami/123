<template>

  <div class="feature_item">
    <div class="icon">
      <slot name="icon" />
    </div>
    <div class="heading">
      <slot name="heading" />
    </div>
    <div class="description">
      <ul class="description_item" >
        <li v-for="item of items">{{ item }}</li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
  name: "BaseFeaturesCard.vue",
  props: {
    items: []
  },
  data() {
    return {}
  },
  watch: {
    items: function (newVal, oldVal) {

    }
  },

  components: {},

  methods: {},

  mounted() {

  }

}
</script>

<style scoped lang="scss">
.feature_item {
  border-radius: 10px;
  background: #FFF;
  width: 29%;
  padding: 15px;

  .heading {
    color: var(--black, #000);
    font-family: "IBM Plex Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .description {
    .description_item {
      padding-left: 20px;
      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  transition: .15s ease;
  cursor: default;
  &:hover {
    transform: scale(1.02);
  }
}

@media screen and (max-width: 768px){
  .feature_item {
    width: 100%;
  }
}
</style>