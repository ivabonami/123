<template>
    <div class="fluid">
        <div class="row">
            <div class="logo">
              <router-link to="/">
                <base-logotype></base-logotype>
              </router-link>

            </div>
            <a class="phone"
               :href="`tel:${settings.phone}`"
            >
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M8.85052 3.57936C9.48318 3.70225 10.0646 4.01028 10.5204 4.46404C10.9762 4.9178 11.2856 5.49664 11.4091 6.12648M8.85052 1C10.1649 1.14537 11.3907 1.73136 12.3264 2.66176C13.2622 3.59216 13.8523 4.81166 14 6.12003M6.37422 8.64979C5.59591 7.87496 4.98135 6.99885 4.53053 6.06408C4.49175 5.98368 4.47236 5.94347 4.45747 5.8926C4.40453 5.71182 4.44256 5.48983 4.55268 5.33672C4.58367 5.29364 4.62069 5.25678 4.69473 5.18307C4.92118 4.95763 5.03441 4.84491 5.10844 4.73156C5.38761 4.3041 5.38761 3.75303 5.10844 3.32557C5.03441 3.21222 4.92118 3.0995 4.69473 2.87406L4.56851 2.7484C4.22427 2.40571 4.05216 2.23436 3.86731 2.14128C3.49968 1.95617 3.06553 1.95617 2.6979 2.14128C2.51305 2.23436 2.34093 2.40571 1.9967 2.7484L1.89459 2.85005C1.55154 3.19158 1.38001 3.36234 1.24901 3.5945C1.10364 3.85212 0.999122 4.25224 1.00001 4.54772C1.0008 4.814 1.05269 4.99599 1.15646 5.35997C1.71414 7.31602 2.76636 9.16179 4.31314 10.7017C5.85992 12.2415 7.71396 13.2891 9.6788 13.8442C10.0444 13.9475 10.2272 13.9992 10.4947 14C10.7915 14.0009 11.1934 13.8968 11.4522 13.7521C11.6854 13.6217 11.8569 13.4509 12.2 13.1094L12.3021 13.0078C12.6463 12.6651 12.8184 12.4937 12.9119 12.3097C13.0979 11.9437 13.0979 11.5115 12.9119 11.1455C12.8184 10.9615 12.6463 10.7901 12.3021 10.4474L12.1759 10.3218C11.9494 10.0963 11.8362 9.98361 11.7223 9.90991C11.2929 9.63199 10.7394 9.63199 10.31 9.90991C10.1962 9.98361 10.0829 10.0963 9.85649 10.3218C9.78245 10.3955 9.74543 10.4323 9.70215 10.4632C9.54836 10.5728 9.32537 10.6107 9.14377 10.558C9.09267 10.5431 9.05229 10.5238 8.97153 10.4852C8.03256 10.0364 7.15252 9.42461 6.37422 8.64979Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="number">

                {{ settings.phone }}
              </span>
            </a>
            <div class="nav">
              <ul class="navigation">
                <li v-for="item of menuItems">
                  <a :href="'#' + item.href">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="call-to-action">
              <button-primary>
                <template
                    @buttonPressed="emit => emit"
                    #button-text>
                  Заполнить анкету
                </template>
              </button-primary>
            </div>
        </div>
    </div>
    

</template>
<script>
import BaseLogotype from '../Layout/BaseLogotype.vue'
import buttonPrimary from "@/Layout/Buttons/ButtonPrimary.vue";

import {settings} from "@/Stores/settings.js";

export default {
  components: {
    BaseLogotype,
    buttonPrimary
  },
    name: "BaseHeader.vue",
    
    data() {
        return {
          menuItems: [
            {
              name: 'Преимущества',
              href: 'features'
            },{
              name: 'Вакансии',
              href: 'vacancies'
            },{
              name: 'Компания',
              href: 'company'
            },{
              name: 'Вопросы',
              href: 'faq'
            },
          ],

          settings
            
        }
    },
    
}
</script>
<style lang="scss">
    .fluid {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .phone {
      display: flex;
      gap: 11px;
      cursor: default;

      color: var(--black, #000);
      font-family: "IBM Plex Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;

    }
    .nav {
      margin-left: auto;

      .navigation {
        display: flex;
        padding-left: 0;
        list-style: none;
        gap: 10px;

        li {
          border-bottom: 1px solid transparent;
          transition: .15s ease;

          a {
            color: var(--black, #000);
            font-family: "IBM Plex Sans";
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;

          }
          &:hover {
            border-bottom-color: rgba(0, 0, 0, 0.30);
          }
        }
      }
    }
</style>