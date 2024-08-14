<script>
    import AppCard from '../src/components/AppCard.vue';
    import AppSwiper from '../src/components/AppSwiper.vue';
    import { store } from '../src/store.js';
    import axios from "axios";

    export default {
        components: {
            AppCard,
            AppSwiper,
        },
        props: {
            cardArrayMovie: Array,
            cardArrayTv: Array,
        },
        data() {
            return {
                store,
                pageIdMovie: 2,
                pageIdTv: 2,
                popularFilms: [],
                popularSeries: [],
                seriesName: '',
                seriesOverview: '',
                seriesLanguage: '',
                seriesVoteAverage: '',
                trailerUrl: ''
            }
        },
        methods: {
            loadMoreMovie() {
                axios.get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: this.store.apiKey,
                        query: this.store.searchQuery,
                        page: this.pageIdMovie
                    }
                }).then((resp) => {
                    this.pageIdMovie++;
                    this.cardArrayMovie.push(...resp.data.results);
                })
            },
            loadMoreTv() {
                axios.get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key: this.store.apiKey,
                        query: this.store.searchQuery,
                        page: this.pageIdTv
                    }
                }).then((resp) => {
                    this.pageIdTv++;
                    this.cardArrayTv.push(...resp.data.results);
                })
            },
            getPopularFilms() {
                axios.get("https://api.themoviedb.org/3/discover/movie", {
                    params: {
                        api_key: this.store.apiKey,
                        page: 1,
                    }
                }).then((resp) => {
                    this.popularFilms = resp.data.results;
                })
            },
            getPopularSeries() {
                axios.get("https://api.themoviedb.org/3/discover/tv", {
                    params: {
                        api_key: this.store.apiKey,
                        page: 1,
                    }
                }).then((resp) => {
                    this.popularSeries = resp.data.results;
                })
            },
            getMainContent() {
                axios.get("https://api.themoviedb.org/3/tv/94997", {
                    params: {
                        api_key: this.store.apiKey,
                        append_to_response: 'videos',
                    }
                }).then((resp) => {
                    const data = resp.data;
                    const trailer = data.videos.results.find(video => video.type === "Trailer");

                    this.seriesName = data.name;
                    this.seriesOverview = data.overview;
                    this.seriesLanguage = data.original_language;
                    this.seriesVoteAverage = data.vote_average;
                    this.trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : '';

                })
            },
        },
        created() {
            this.getPopularFilms();
            this.getPopularSeries();
            this.getMainContent();
        },
    }
</script>

<template>
    <div class="container">
        <div class="ms-main-content d-flex">
        <div class="video-container">
            <iframe v-if="trailerUrl" :src="trailerUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        
        <div class="info-container text-white ms-3">
            <h1>{{ seriesName }}</h1>
            <p>{{ seriesOverview }}</p>
            <p><strong>Lingua Originale:</strong> {{ seriesLanguage }}</p>
            <p><strong>Voti:</strong> {{ seriesVoteAverage.toFixed(1) }}</p>
        </div>
    </div>

        <!-- Sezione Films -->
        <div class="row ms-swiper ms-mb">
            <h2 class="text-white my-3 fw-semibold p-0">Film Popolari</h2>
            <AppSwiper :items="popularFilms" />
        </div>

        <!-- Sezione Series -->
        <div class="row ms-swiper ms-mb">
            <h2 class="text-white my-3 fw-semibold p-0">Serie TV Popolari</h2>
            <AppSwiper :items="popularSeries" />
        </div>

        <!-- Cards Film e Series -->
        <div>
            <div class="mx-5">
                <div class="row d-flex flex-wrap">
                    <h2 v-show="cardArrayMovie.length > 0" class="text-white fw-bold my-5">Film</h2>
                    <div class="col-3" v-for="card in cardArrayMovie" :key="card.id">
                        <AppCard :card="card" />
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <button v-show="cardArrayMovie.length > 0" @click="loadMoreMovie"
                            class="btn py-2 px-3 bg-black text-danger fw-semibold">Load More</button>
                    </div>
                </div>

                <div class="row d-flex flex-wrap">
                    <h2 v-show="cardArrayTv.length > 0" class="text-white fw-bold my-5">Tv Series</h2>
                    <div class="col-3" v-for="card in cardArrayTv" :key="card.id">
                        <AppCard :card="card" />
                    </div>
                    <div class="d-flex justify-content-center mt-5 pb-5">
                        <button v-show="cardArrayTv.length > 0" @click="loadMoreTv"
                            class="btn py-2 px-3 bg-black text-danger fw-semibold">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .btn {
        max-width: 200px;
    }

    .ms-main-content {
        height: 470px;
    }

    .ms-swiper {
        height: 300px;
    }

    .ms-mb {
        margin-bottom: 200px;
    }

    .ms-main-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
}

.video-container {
    flex: 1;
    max-width: 60%;
}

.video-container iframe {
    width: 100%;
    height: 364px;
}

.info-container {
    flex: 1;
    max-width: 35%;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
}
</style>