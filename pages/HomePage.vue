<script>
import AppCard from '../src/components/AppCard.vue';
import AppSwiper from '../src/components/AppSwiper.vue';
import {store} from '../src/store.js';
import axios from "axios";


export default {
    components:{
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
        }
    },
    methods: {
        loadMoreMovie() {
            axios.get("https://api.themoviedb.org/3/search/movie", { params: { api_key: this.store.apiKey, query: this.store.searchQuery, page: this.pageIdMovie}}).then((resp) => {
                this.pageIdMovie++
                this.movie_id = this.cardArrayMovie.id
                console.log(resp.data.results);
                this.cardArrayMovie.push(...resp.data.results);
                console.log(this.cardArrayMovie.id);
            })
        },
        loadMoreTv() {
            axios.get("https://api.themoviedb.org/3/search/tv", { params: { api_key: this.store.apiKey, query: this.store.searchQuery, page: this.pageIdTv}}).then((resp) => {
                this.pageIdTv++
                console.log(resp.data.results);
                this.cardArrayTv.push(...resp.data.results);
            })
        },
        getPopularFilms() {
            axios.get("https://api.themoviedb.org/3/discover/movie", 
            {
                params: {
                    api_key: this.store.apiKey, 
                    page: 1,         
            }}).then((resp) => {
                this.popularFilms = resp.data.results;
                console.log(this.popularFilms);
            }) 
        },
        getPopularSeries() {
            axios.get("https://api.themoviedb.org/3/discover/tv", 
            {
                params: {
                    api_key: this.store.apiKey, 
                    page: 1,
            }}).then((resp) => {
                this.popularSeries = resp.data.results;
                console.log(this.popularSeries);
            }) 
        }
    },
    created() {
        axios.get("https://api.themoviedb.org/3/discover/movie", 
            {
                params: {
                    api_key: this.store.apiKey,
                    page: 1,
            }}).then((resp) => {
                this.popularFilms = resp.data.results;
                console.log(this.popularFilms);
            }) ,

            axios.get("https://api.themoviedb.org/3/discover/tv", 
            {
                params: {
                    api_key: this.store.apiKey, 
                    page: 1,
            }}).then((resp) => {
                this.popularSeries = resp.data.results;
                console.log(this.popularSeries);
            })
    },
}
</script>

<template>
    <div class="container">
        <div class="ms-main-content"></div>
        <div class="row ms-swiper ms-mb">
            <h2 class="text-white my-3 fw-semibold">Films Trending Now</h2>
            <AppSwiper :popularFilms="popularFilms"/>
        </div>
        <div class="row ms-swiper ms-mb">
            <AppSwiper :popularSeries="popularSeries"/>
        </div>
        <div>
            <div class="mx-5">
                <div class="row d-flex flex-wrap">
                    <h2 v-show="cardArrayMovie.length > 0" class="text-white fw-bold my-5">Film</h2>
                    <div class="col-3" v-for="card in cardArrayMovie" :key="card">
                        <AppCard :card="card" />
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <button v-show="cardArrayMovie.length > 0" @click="loadMoreMovie"
                            class="btn py-2 px-3 bg-black text-danger fw-semibold">Load More</button>
                    </div>
                </div>
                <div class="row d-flex flex-wrap">
                    <h2 v-show="cardArrayTv.length > 0" class="text-white fw-bold my-5">Tv Series</h2>
                    <div class="col-3" v-for="card in cardArrayTv" :key="card">
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
    .btn{
        max-width: 200px;
    }

    .ms-main-content{
        height: 470px;
    }

    .ms-swiper{
        height: 300px;
    }

    .ms-mb{
        margin-bottom: 50px;
    }
</style>
