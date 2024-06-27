<template lang="html">
    <button 
    @click="onPressed"
    class="button secondary">
        <slot name="button-text" />

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" viewBox="0 0 20 6" fill="none">
        <path d="M1 3H19M19 3L16.7128 1M19 3L16.7128 5" stroke="#B20931" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
</template>
<script>
export default {
    name: "ButtonSecondary.vue",
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
      display: flex;
      align-items: center;

      cursor: pointer;
      background: transparent;
      border: none;
      padding: 10px 15px;

      color: var(--red, #B20931);
      text-align: center;
      font-family: "IBM Plex Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      transition: .15s ease;

      svg {
        margin-left: 10px;
        transition: .30s ease;
      }
      &:hover {
        svg  {
          margin-left: 15px;
        }
      }
    }
</style>