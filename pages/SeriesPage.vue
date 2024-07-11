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
        cardArrayTv: Array,
    },
    data() {
        return {
            store,
            pageIdTv: 2,
        }
    },
    methods: {
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
    <div class="text-white">
        Series
    </div>
    <div class="ms-swiper">
        
        <AppSwiper/>
    </div>
    <div>
        <div class="mx-5">
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

    .ms-swiper{
        height: 250px;
    }
</style>
