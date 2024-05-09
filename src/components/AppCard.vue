<script>
export default {
    props: {
        card: Object,
        card: Object,
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
        setVoteRate() {
            console.log(Math.floor(this.card.vote_average));
            return Math.floor(this.card.vote_average / 2);
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
            <p class="card-text">{{setVoteRate()}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.imgPoster{
    width: 342px;
    height: 513px;
}
</style>