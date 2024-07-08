<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";


export default {
    components: { 
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store,
            cardArrayMovie: [],
            cardArrayTv: [],
        }
    },
    methods: {
        getMovieAPI() {
            axios.get("https://api.themoviedb.org/3/search/movie", {params: {api_key: this.store.apiKey, query: this.store.searchQuery}}).then((resp) => {
                this.cardArrayMovie = resp.data.results;
                console.log(this.cardArrayMovie);
            })
        },
        getTvSeriesAPI() {
            axios.get("https://api.themoviedb.org/3/search/tv", {params: {api_key: this.store.apiKey, query: this.store.searchQuery}}).then((resp) => {
                this.cardArrayTv = resp.data.results;
                console.log(this.cardArrayTv);
            })
        },
        getAPI(){
            this.getMovieAPI();
            this.getTvSeriesAPI();
        },
    },
}
</script>

<template>
    <div>
        <AppHeader @filter="getAPI"/>
        <router-view></router-view>
        <!-- <AppMain :cardArrayMovie="cardArrayMovie" :cardArrayTv="cardArrayTv"/> -->
    </div>
</template>

<style lang="scss">
    body{
        background-color: black;
    }
</style>