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
        <div class="card-body d-flex flex-column align-items-center mb-5">
            <div class="position-relative d-flex flex-column justify-content-center align-items-center">
                <img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="poster" class="imgPoster">

                <div class="description d-flex flex-column position-absolute top-50 start-50 translate-middle">
                    <h3 class="card-title" v-if="card.title">Titolo: {{card.title}}</h3>
                    <h3 class="card-title" v-else-if="card.name">Nome: {{card.name}}</h3>
                    <p class="card-text" v-if="card.original_title">Titolo originale: {{card.original_title}}</p>
                    <p class="card-text" v-if="card.original_name">Nome originale: {{card.original_name}}</p>
                    <p class="card-text">
                        <span>Lingua: </span>
                        <img :src="getFlagUrl(card.original_language)" alt="flag-country">
                    </p>
                    <div class="star-rating">
                        <span>Rating: </span>
                        <i v-for="i in curRating" :key="i" class="fa-solid fa-star text-warning"></i>
                        <i v-for="i in (5 - curRating)" :key="i" class="fa-regular fa-star text-warning"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.imgPoster{
    width: 342px;
    height: 513px;
    border: solid 4px white;
}

.position-relative:hover .imgPoster {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.position-relative .description {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.position-relative:hover .description {
    opacity: 1;
}
</style>