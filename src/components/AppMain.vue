<script>
import AppCard from './AppCard.vue';


export default {
    components:{
        AppCard,
    },
    props: {
        cardArrayMovie: Array,
        cardArrayTv: Array,
    },
}
</script>

<template>
    <!-- Contenitore -->
    <div class="container">
        <!-- Film -->
        <div class="row d-flex flex-wrap">
            <h2 class="text-white bg-primary">Film</h2>
            <div class="col-3" v-for="card in cardArrayMovie" :key="card">
                <AppCard :card="card"/>
            </div>
            <h2 class="text-white bg-danger">Tv Series</h2>
            <div class="col-3" v-for="card in cardArrayTv" :key="card">
                <AppCard :card="card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>