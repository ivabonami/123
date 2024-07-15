<template>
  <div class="popup" v-if="$props.settings.show === true">
    <div class="popup_body">
      <vacancyController
          @closeModal="closeModal()"/>

    </div>

    <div class="backdrop"
         @click="closeModal"
    ></div>
  </div>

</template>

<script>

import VacancyController from "@/Blocks/VacancyController.vue";


export default {
  name: "adminPopup.vue",
  props: {
    settings: {
      show: false,
    }
  },
  data() {
    return {

    }
  },

  components: {
    VacancyController
  },

  methods: {

    closeModal() {
      this.$emit('modalClose', true)
    }
  },

  mounted() {

  }

}
</script>

<style scoped lang="scss">

.popup {
  .popup_body {
    width: 300px;
    margin-top: 20px;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 401;
    top: 0;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .backdrop {
    z-index: 400;
    background-color: rgba(0, 0, 0, 0.30);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(1px);
  }

  .popup_body {
  }
}

</style>