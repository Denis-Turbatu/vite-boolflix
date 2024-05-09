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
    <div>
        <!-- Film -->
        <div class="mx-5">
            <div class="row d-flex flex-wrap">
                <h2 v-show="cardArrayMovie.length > 0" class="text-white fw-bold my-5">Film</h2>
                <div class="col-3" v-for="card in cardArrayMovie" :key="card">
                    <AppCard :card="card"/>
                </div>
                <h2 v-show="cardArrayMovie.length > 0" class="text-white fw-bold my-5">Tv Series</h2>
                <div class="col-3" v-for="card in cardArrayTv" :key="card">
                    <AppCard :card="card"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
