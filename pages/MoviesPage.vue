<template>
    <div class="text-white">
        Movies
    </div>

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
        </div>
</template>

<script>
import AppCard from '../src/components/AppCard.vue';
import {store} from '../src/store.js';
import axios from "axios";


export default {
    components:{
        AppCard,
    },
    props: {
        cardArrayMovie: Array,
    },
    data() {
        return {
            store,
            pageIdMovie: 2,
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
    },
}
</script>

<style lang="scss">
    
</style>