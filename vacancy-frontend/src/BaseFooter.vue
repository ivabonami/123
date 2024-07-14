<template>
  <div class="row">
    <div class="footer">
      <div class="top">
        <router-link to="#top">
          <base-logotype></base-logotype>
        </router-link>
        <div class="nav">
          <ul class="navigation">
            <li v-for="item of menuItems">
              <a :href="'#' + item.href">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <button-primary
            :buttonSize="'long'"
            @buttonPressed="$emit('scrollToVacancies', true)"
        >
          <template #button-text>
            Посмотреть вакансии
          </template>
        </button-primary>
      </div>
      <div class="bottom">
        <div class="address">
          {{ companyInfo.address }}
        </div>
        <a class="policy" href="/policy">
          Политика в отношении персональных данных
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import buttonPrimary from "@/Layout/Buttons/ButtonPrimary.vue";
import baseLogotype from "@/Layout/BaseLogotype.vue";
import {menuItems} from "@/Stores/menu.js";
import {companyInfo} from "@/Stores/companyInfo.js";

export default {
  name: 'BaseFooter',
  components: {
    buttonPrimary,
    baseLogotype
  },
  data() {
    return {
      menuItems,
      companyInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  .top {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .bottom {
    display: flex;
    align-items: center;
    gap: 20px;

    .address {
      width: 60%;
      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .policy {
      margin-left: auto;
      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

@media screen and (max-width: 768px){
  .footer {
    .bottom {
      flex-wrap: wrap;
      .address {
        width: 100%;
        text-align: center;

      }
      .policy {
        margin: 0 auto;
      }

    }
  }
}
</style>