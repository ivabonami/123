<template>
  <div class="row">
    <div class="vacancy">
      <h2>
        Наши Вакансии
        <svg class="interactiveSvg"
             @click="popup.show = true"
             v-if="isAdmin" xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </h2>


      <div class="vacancies-cards">
        <div
             v-for="vacancy of vacancies"
            @click="$emit('vacancyChanged', vacancy)"
            class="card">
          <span class="name">
            {{ vacancy.name }} <br />
          </span>
          <span class="price">
            от {{ vacancy.price }} ₽
          </span>
          <span class="delete"
                @click.stop
                @click="deleteVacancy(vacancy)"
          >
            Удалить
          </span>

          <div class="buttons">
            <span>{{ vacancy.button }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" viewBox="0 0 20 6" fill="none">
              <path d="M1 3H19M19 3L16.7128 1M19 3L16.7128 5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="overlay-image">
            <img :src="'C:/Users/raziel/Documents/vacancy/vacancy/vacancy-backend/uploads' + vacancy.image" alt="">
          </div>

        </div>



      </div>
    </div>
  </div>
  <admin-popup
      :settings="popup"
      @modalClose="popup.show = false"
  />
</template>

<script>
import {vacancies} from "@/Stores/vacancies.js";
import {deleteVacancy, getVacancies} from "@/API/getVacancies.js";
import {isAdmin} from "@/API/auth.js";
import AdminPopup from "@/Blocks/adminPopup.vue";

export default {
  name: 'BaseVacancies',
  components: {
    AdminPopup
  },
  props: {
    active: null
  },
  data () {
    return {
      vacancies,
      isAdmin,
      deleteVacancy,
      popup: {
        show: false
      }
    }
  },

  watch: {
    vacancies: function () {
      console.log(vacancies)
    }
  },
  mounted() {
    getVacancies()
  }
}
</script>

<style lang="scss" scoped>
.delete {
  color: #b20931;
}
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
      transition: .15s ease;


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

@media screen and (max-width: 768px){
  .vacancy {
    .vacancies-cards {
      flex-wrap: wrap;
      width: 100%;

      .card {
        width: 100%;
        .name {

        }
      }
    }
  }
}
</style>