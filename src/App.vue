<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import axios from "axios";

export default {
    components: { 
        AppHeader 
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getAPI() {
            axios.get("https://api.themoviedb.org/3/search/movie", {params: {api_key: this.store.apiKey, query: this.store.searchQuery}}).then((resp) => {
                console.log(resp.data.results);
            })
        }
    },
}
</script>

<template>
    <div>
        <AppHeader @filter="getAPI"/>
    </div>
</template>

<style lang="scss">

</style>