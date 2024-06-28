<template>
  <div class="input-control">
    <input type="email"
           placeholder="Email"
           v-model="data"
           maxlength="80"
           @input="$emit('dataChanged', data)"
    />
  </div>
</template>

<script>
export default {
  name: "InputEmail.vue",
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