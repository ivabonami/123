<template>
  <div class="faq-item" :class="{collapsed: this.$props.item.collapsed}">
    <div class="heading"
         @click="collapseChange()"
    >
      <span> {{ $props.item.name }}</span>

      <svg class="active" xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14"
           fill="none">
        <path d="M27 13L14 1L0.999998 13" stroke="black" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="body">
      <div class="text"
           v-if="$props.item.type === 'text'"
      >
        {{ $props.item.text }}
      </div>

      <div class="text"
           v-if="$props.item.type === 'textWithLink'"
           ref="textWithLink"
      ></div>

      <div class="text"
           v-if="$props.item.type === 'textWithMap'"
           ref="textWithMap"
      ></div>

      <ul class="list"
          v-if="$props.item.type === 'list'"
      >
        <li v-for="text of $props.item.text">{{ text }}</li>
      </ul>
    </div>


  </div>
</template>
<script>
export default {
  name: 'BaseFaqItem',
  props: {
    item: {}
  },
  methods: {
    collapseChange() {
      this.$props.item.collapsed = !this.$props.item.collapsed
    }
  },
  mounted() {
    if (this.$refs.textWithLink) {
      this.$refs.textWithLink.innerHTML = this.$props.item.text.replace('{', `<a class="job-link" href="${this.$props.item.link}">`).replace('}', '</a>')
    } else {
    }

    if (this.$refs.textWithMap) {
      this.$refs.textWithMap.innerHTML = this.$props.item.text.replace('{', `<a class="job-link" href="${this.$props.item.link}">`).replace('}', '</a>')
    } else {
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-item {
  margin-bottom: 30px;


  .heading {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    cursor: pointer;
    span {
      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 142.857% */
    }
  }

  .text, .list {
    color: var(--black, #000);
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;



  }
  .list {
    padding-left: 20px;
  }

  &.collapsed {
    .text, .list {
      display: none;
    }

    .heading {
      svg {
        transform: rotate(200grad);
      }
    }
  }
}

@media screen and (max-width: 768px){
  .faq-item {
    .heading {
      span {
        color: var(--black, #000);
        font-family: "IBM Plex Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 100% */
      }
    }

  }
}
</style>
