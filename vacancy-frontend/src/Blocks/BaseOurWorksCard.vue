<template>
  <div class="card"
       :class="{selected: $props.data.id === $props.selected}"
       @click="makeSelected()">
    <div class="icon">
      <img :src="$props.data.icon" alt="">
    </div>

    <div class="heading">
      {{ $props.data.heading }}
    </div>

    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="43" height="27" viewBox="0 0 43 27" fill="none">
      <path d="M24.8198 25.0329L41.033 8.81971C44.1828 5.66989 41.952 0.28418 37.4975 0.28418H5.07107C0.616544 0.28418 -1.61429 5.66989 1.53553 8.81971L17.7487 25.0329C19.7014 26.9855 22.8672 26.9855 24.8198 25.0329Z" fill="#B20931"/>
    </svg>

  </div>

</template>

<script>
export default {
  name: "BaseOurWorksCard.vue",

  props: {
    data: {},
    selected: null
  },
  data() {
    return {
      image: null,
      selected: false
    }
  },
  methods: {
    makeSelected() {
      this.$emit('cardSelected', this.$props.data)
    }
  },

  mounted() {
    this.image = this.$props.data.icon
    console.log(this.$props.data)
  }

}
</script>

<style scoped lang="scss">

.card {
  border-radius: 10px;
  background: var(--red, #ffffff);
  padding: 15px;
  position: relative;
  margin-bottom: 50px;
  cursor: pointer;
  width: 21%;
  transition: .15s ease;

  .icon {
    width: 40px;
    height: 40px;

    img {
      filter: invert(0);
    }
  }
  .heading {
    margin-top: 20px;
    color: #000;
    font-family: "IBM Plex Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }
  .arrow {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
  &:hover {
    transform: scale(1.03);
  }

  &.selected {
    background: var(--red, #B20931);

    .heading {
      color: #FFF;
    }

    img {
      filter: invert(1);
    }
    .arrow {
      display: block;
    }

    &:hover {
      transform: scale(1);
    }
  }
}

@media screen and (max-width: 768px){
  .card {
    width: 100%;
  }
}

</style>