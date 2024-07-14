<template>
  <div class="row">
    <div class="carousel">
      <div class="navigation">
        <div class="prev"
             @click="setItems('prev')">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="white"/>
            <path d="M16 20L10 14L16 8" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


        </div>
        <div class="next"
             @click="setItems('next')">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="white"/>
            <path d="M12 8L18 14L12 20" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
      </div>
      <div class="carousel_items" :style="{'width': width}">
        <div class="carousel_item"
             ref="carouselItem"
             :style="{'background-color': '#' + item.color}"
             v-for="(item, index) of carousel.cards"
        >

          <div class="carousel_item_body">
            <div class="heading">
              {{ item.heading }}
            </div>
            <div class="text">
              {{ item.description }}
            </div>

          </div>
          <div class="carousel_item_icon">
            <img :src="item.icon" alt="">
          </div>

        </div>
      </div>

    </div>
  </div>

</template>
<script>

import {carousel} from "@/Stores/carousel.js";

export default {
  name: 'BaseCarousel',
  data() {
    return {
      carousel,
      width: 0,

    }
  },
  methods: {
    setItems(direction) {
      console.log(this.$refs)

      if (direction === 'next') {

        this.$refs.carouselItem[1].style.transform = 'translateX(-100%)'

        setTimeout(() => {
          this.$refs.carouselItem[1].style.transform = 'translateX(0)'
          const item = carousel.cards.shift()
          carousel.cards.push(item)
        }, 200)


      } else {
        const item = carousel.cards.pop()
        carousel.cards.unshift(item)

        this.$refs.carouselItem[0].style.transform = `translateX(${this.$refs.carouselItem[1].scrollWidth}px)`

        setTimeout(() => {
          this.$refs.carouselItem[0].style.transform = 'translateX(0)'


        }, 200)


      }

    },
    autoplay() {
      if (carousel.settings.autoplay) {
        setInterval(() => {
          this.setItems('next')
        }, carousel.settings.duration)
      }
    }

  },
  mounted() {
    this.width =  carousel.cards.length * 50 + 2 + '%'

    this.autoplay()

  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  overflow: hidden;

  .navigation {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    justify-content: end;

    .prev, .next {

      svg {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius: 200px;

        cursor: pointer;
        circle {
          fill: #FFFFFF;
          transition: .15s ease;

        }
        path {
          stroke: black;
          transition: .15s ease;
        }
        &:hover {
          circle {
            fill: #B20931
          }
          path {
            stroke: white;
          }
        }
      }
    }
  }

  .carousel_items {
    display: flex;
    gap: 20px;


    .carousel_item {
      width: 50%;
      border-radius: 10px;
      padding: 20px;
      height: 160px;
      position: relative;
      transition: .15s ease;


      .carousel_item_body {
        width: 70%;
        .heading {
          color: #000;
          font-family: "IBM Plex Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px; /* 100% */
          margin-bottom: 10px;
        }
        .text {
          color: #000;
          font-family: "IBM Plex Sans";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 125% */
        }
      }

      .carousel_item_icon {
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }

}

@media screen and (max-width: 768px){
  .carousel {
    .carousel_items {
      .carousel_item {
        height: auto;
        .carousel_item_body {
          width: 100%;

          .heading {
            font-size: 16px;
          }

        }
        .carousel_item_icon {
          top: auto;
          bottom: 0;
          right: 10px;
          width: 20%;

          img {
            width: 100%;
          }
        }

      }

    }
  }
}
</style>