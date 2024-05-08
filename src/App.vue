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
            cardArray: [],
        }
    },
    methods: {
        getAPI() {
            axios.get("https://api.themoviedb.org/3/search/movie", {params: {api_key: this.store.apiKey, query: this.store.searchQuery}}).then((resp) => {
                this.cardArray = resp.data.results;
                console.log(this.cardArray);
            })
        }
    },
}
</script>

<template>
    <div>
        <AppHeader @filter="getAPI"/>
        <AppMain :cardArray="cardArray"/>
    </div>
</template>

<style lang="scss" scoped></style>