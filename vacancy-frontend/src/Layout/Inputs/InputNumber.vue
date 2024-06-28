<template>
  <div class="input-control">
    <MaskInput type="tel"
               mask="+7 (###) ###-##-##"
           placeholder="Телефон *"
           v-model="data"
           @change="$emit('dataChanged', data)"
    />
  </div>
</template>

<script>
import { MaskInput } from 'vue-3-mask';

export default {
  name: "InputNumber.vue",
  components:{ MaskInput },
  props: {
    data: '',

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