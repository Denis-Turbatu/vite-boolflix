<template>
  <swiper 
    :slidesPerView="6" 
    :spaceBetween="30" 
    :centeredSlides="false" 
    :loop="true" 
    :navigation="true"
    :modules="modules" 
    class="mySwiper" 
    :class="{ 'swiper-pagination-hidden': true }"
  >
    <swiper-slide v-for="item in items" 
      :key="item.id" 
      class="ms-slider"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})` }"
    >
      <!-- Titolo o altri dettagli possono essere aggiunti qui -->
      <!-- <h3 class="card-title" v-if="item.title">{{ item.title }}</h3> -->
    </swiper-slide>

    <!-- Messaggio di fallback se items è vuoto -->
    <div v-if="!items.length" class="no-items">
      No items available.
    </div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import '../style/swiper.scss';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style lang="scss" scoped>
.ms-slider {
  background-size: cover;
  background-position: center;
}

.swiper-navigation-prev, .swiper-navigation-next {
  background-color: #ffffff;
  color: #000000;
}

.no-items {
  text-align: center;
  color: #fff;
  padding: 20px;
}
</style>
