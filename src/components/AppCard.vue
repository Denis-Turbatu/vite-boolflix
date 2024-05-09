<script>

export default {
    props: {
        card: Object,
        card: Object,
    },
    data() {
        return {
            curRating: Math.floor(this.card.vote_average / 2),
        }
    },
    methods: {
        getFlagUrl(languageCode) {
        switch (languageCode.toLowerCase()) {
                case 'en':
                return 'https://flagcdn.com/36x27/gb.png';
                case 'ja':
                return 'https://flagcdn.com/36x27/jp.png';
                case 'zh':
                return 'https://flagcdn.com/36x27/cn.png';
                default:
                return `https://flagcdn.com/36x27/${languageCode}.png`;
            }
        },
    }
}
</script>

<template>
    <div>
        <div class="card-body">
            <img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="poster" class="imgPoster">

            <h3 class="card-title">{{card.title}}</h3>
            <h3 class="card-title">{{card.name}}</h3>

            <p class="card-text">{{card.original_title}}</p>
            <p class="card-text">{{card.original_name}}</p>
            <p class="card-text">
                <img :src="getFlagUrl(card.original_language)" alt="flag-country">
            </p>
            <div class="star-rating">
                    <i v-for="i in curRating" :key="i" class="fa-solid fa-star"></i>
                    <i v-for="i in (5 - curRating)" :key="i" class="fa-regular fa-star"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.imgPoster{
    width: 342px;
    height: 513px;
}
</style>