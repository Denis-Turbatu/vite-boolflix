<script>
import AppCard from './AppCard.vue';

export default {
    components:{
        AppCard,
    },
    props: {
        cardArray: Array,
    },
}
</script>

<template>
    <div class="container">
        <div class="row d-flex flex-wrap">
            <div class="col-3" v-for="card in cardArray" :key="card">
                <AppCard :cardObj="card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>