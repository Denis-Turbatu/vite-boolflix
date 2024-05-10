<script>
import AppCard from './AppCard.vue';
import {store} from '../store.js';
import axios from "axios";


export default {
    components:{
        AppCard,
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
        }
    },
    methods: {
        loadMoreMovie() {
            axios.get("https://api.themoviedb.org/3/search/movie", { params: { api_key: this.store.apiKey, query: this.store.searchQuery, page: this.pageIdMovie}}).then((resp) => {
                this.pageIdMovie++
                console.log(resp.data.results);
                this.cardArrayMovie.push(...resp.data.results);
            })
        },
        loadMoreTv() {
            axios.get("https://api.themoviedb.org/3/search/tv", { params: { api_key: this.store.apiKey, query: this.store.searchQuery, page: this.pageIdTv}}).then((resp) => {
                this.pageIdTv++
                console.log(resp.data.results);
                this.cardArrayTv.push(...resp.data.results);
            })
        },
    },
}
</script>

<template>
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
</template>

<style lang="scss" scoped>
    .btn{
        max-width: 200px;
        
    }
</style>
