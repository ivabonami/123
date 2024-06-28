<template>
  <div class="row">
    <div class="vacancy">
      <h2>Наши Вакансии</h2>

      <div class="vacancies-cards">

        <div :class="{active: $props.active.name === vacancy.name }"
             v-for="vacancy of vacancies"
            @click="$emit('vacancyChanged', vacancy)"
            class="card">
          <span class="name">
            {{ vacancy.name }} <br />
          </span>
          <span class="price">
            от {{ vacancy.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") }} ₽
          </span>

          <div class="buttons">
            <span>{{ vacancy.buttonText }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" viewBox="0 0 20 6" fill="none">
              <path d="M1 3H19M19 3L16.7128 1M19 3L16.7128 5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="overlay-image">
            <img :src="vacancy.image" alt="">
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import {vacancies} from "@/Stores/vacancies.js";

export default {
  name: 'BaseVacancies',
  props: {
    active: null
  },
  data () {
    return {
      vacancies
    }
  }
}
</script>

<style lang="scss" scoped>

.vacancy {
  padding-top: 40px;
  padding-bottom: 40px;
  .vacancies-cards {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 35px;

    .card {
      width: 290px;
      height: 180px;
      background-color: black;
      border-radius: 10px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      cursor:pointer;

      z-index: 1;
      position: relative;



      .name {
        color: var(--gray, #EFF3F6);
        font-family: "IBM Plex Sans";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px; /* 100% */
      }
      .price {
        color: var(--gray, #EFF3F6);
        font-family: "IBM Plex Sans";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 38px; /* 100% */
      }
      .buttons {
        margin-top: auto;
        display: flex;
        transition: .3s ease;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        cursor: pointer;

        span {
          width: 80%;
          color: var(--gray, #fff);
          font-family: "IBM Plex Sans";
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 12px; /* 100% */
        }

        svg {
          padding: 10px 3px;
          border-radius: 35px;
          background: var(--gray, #fff);
          transition: .15s ease;
          path {
            transition: .15s ease;
          }
        }
      }
      .overlay-image {
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        z-index: -1;
        opacity: .4;
        transition: .15s ease;
        img {
          width: 100%;
          height: 100%;
        }
      }

      transition: .15s ease;
      &:hover {
        transform: scale(1.02);
        .overlay-image {
          opacity: .7;
        }
        .buttons {
          svg {
            background-color: #B20931;
            path {
              stroke: #EFF3F6;
            }
          }
        }
      }
      &.active {
        .overlay-image {
          opacity: .9;
        }
      }
    }
  }
}
</style>