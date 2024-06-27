<template>
  <div class="row">
    <div class="hero-banner">
      <div class="text">
        <h2>
          Хотите зарабатывать <br />
          <span>до 100.000 ₽</span>
          рядом с домом?
        </h2>

        <div class="city">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
            <path d="M9 21C10 16 17 15.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 15.4183 8 16 9 21Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <span>
            г. Домодедово
          </span>

        </div>
        <div class="buttons">
          <button-primary
              :buttonSize="'long'"
              @buttonPressed="emit => emit"
          >
            <template #button-text>
              Посмотреть вакансии
            </template>
          </button-primary>

          <button-secondary>
            <template
                @buttonPressed="emit => emit"
                #button-text>
              Наши преимущества
            </template>
          </button-secondary>
        </div>
        <div class="advanced-info">
          * от 90.000 ₽ при вахтовом методе работы
        </div>

      </div>
      <div class="hero-banner_image">
        <img src="../Assets/images/banner.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
import buttonPrimary from "@/Layout/Buttons/ButtonPrimary.vue";
import buttonSecondary from "@/Layout/Buttons/ButtonSecondary.vue";

export default {
  name: "HeroBanner.vue",
  components: {
    buttonPrimary,
    buttonSecondary
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

.hero-banner {
  display: flex;
  align-items: center;
  margin-bottom: -5px;

  .text {
    span {
      color: var(--red, #B20931);

    }
  }
  .city {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 15px;

    span {
      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .buttons {
    margin-top: 40px;
    display: flex;
    gap: 20px;
  }
  .advanced-info {
    margin-top: 15px;
    color: var(--black, #000);
    font-family: "IBM Plex Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>