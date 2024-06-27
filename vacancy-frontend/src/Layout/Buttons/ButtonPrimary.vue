<template lang="html">
    <button 
    @click="onPressed"
    :class="$props.buttonSize"
    class="button primary">
        <slot name="button-text" > </slot>
    </button>
</template>
<script>
export default {
    name: "ButtonPrimary.vue",
    props: {
      buttonSize: null
    },
    data() {
        return {
            
        }
    },
    methods: {
        onPressed() {
            this.$emit('buttonPressed', true)
        }
    },

}
</script>
<style lang="scss" scoped>
    .button {
      cursor: pointer;
      border-radius: 5px;
      background: var(--red, #B20931);
      border: none;
      padding: 10px 15px;

      color: #FFF;
      text-align: center;
      font-family: "IBM Plex Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      transition: .15s ease;

      &:hover {
        background-color: rgba(178, 9, 49, 0.8);
      }

      &.long {
        padding: 10px 50px;

        color: #FFF;
        text-align: center;
        font-family: "IBM Plex Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

    }
</style>