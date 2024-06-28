<template>
  <div class="checkbox">
    <input type="checkbox"
           @change="$emit('dataChanged', checked)"
           checked
           v-model="checked"
           name="policy"
           id="policy">
    <label for="policy">Я даю cогласие на обработку в соответствии с yсловиями обработки персональных
      данных</label>
  </div>

</template>
<script>
export default {
  name: 'InputCheckbox',
  data () {
    return {
      checked: null
    }
  }
}
</script>
<style lang="scss" scoped>
.checkbox {
  display: flex;
  gap: 10px;
  align-items: center;


  color: var(--black, #000);
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;


}
</style>