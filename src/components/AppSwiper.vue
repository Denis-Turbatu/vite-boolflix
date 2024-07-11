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

    <swiper-slide v-for="item in popularFilms" 
      :key="item" 
      class="ms-slider"
      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})` }"
      >
      
      <!-- <h3 class="card-title" v-if="item.title">Titolo: {{item.title}}</h3> -->
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import '../style/swiper.scss';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import {store} from '../store.js';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      store,
      popularFilms: Array,
      popularSeries: Array,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style lang="scss" scoped>
.ms-slider{
  background-size: cover;
  background-position: center;
}

.swiper-navigation-prev {
    background-color: #ffffff; /* Imposta lo sfondo bianco del pulsante precedente */
    color: #000000; /* Imposta il testo nero del pulsante precedente */
}

.swiper-navigation-next {
    background-color: #ffffff; /* Imposta lo sfondo bianco del pulsante successivo */
    color: #000000; /* Imposta il testo nero del pulsante successivo */
}
</style>