<script>
import AppCardMovie from './AppCardMovie.vue';
import AppCardTv from './AppCardTv.vue';

export default {
    components:{
        AppCardMovie,
        AppCardTv,
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
                <AppCardMovie :cardObjMov="card"/>
            </div>
        </div>
        <!-- Serie TV -->
        <div class="row d-flex flex-wrap">
            <h2 class="text-white bg-danger">Serie TV</h2>
            <div class="col-3" v-for="card in cardArrayTv" :key="card">
                <AppCardTv :cardObjTv="card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>