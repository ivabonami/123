<template>
  <div class="input-control">
    <input type="text"
           placeholder="ФИО *"
           v-model="data"
           maxlength="80"
           @input="$emit('dataChanged', data)"
    />
  </div>
</template>

<script>

export default {
  name: "InputText.vue",
  props: {
    data: ''
  },

  watch: {
    data: function (newVal, oldVal) {
      oldVal !== newVal ? this.data = newVal : this.data = oldVal
    }
  },

  data() {
    return {
      data: null
    }
  }
}
</script>

<style scoped>

</style>