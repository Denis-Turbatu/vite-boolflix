<script>
export default {
    props: {
        cardObjMov: Object,
    },
    methods: {
        getFlagUrl(languageCode) {
        switch (languageCode.toLowerCase()) {
                case 'en':
                return 'https://flagcdn.com/48x36/gb.png';
                case 'ja':
                return 'https://flagcdn.com/48x36/jp.png';
                case 'zh':
                return 'https://flagcdn.com/48x36/cn.png';
                default:
                return `https://flagcdn.com/48x36/${languageCode}.png`;
            }
        },
        setVoteRate() {
            console.log(Math.floor(this.cardObjMov.vote_average));
            return Math.floor(this.cardObjMov.vote_average / 2);
        },
    }
}
</script>

<template>
    <div>
        <div class="card-body">
            <img :src="`https://image.tmdb.org/t/p/w342${cardObjMov.poster_path}`" alt="poster">
            <h3 class="card-title">{{cardObjMov.title}}</h3>
            <p class="card-text">{{cardObjMov.original_title}}</p>
            <p class="card-text">
                <img :src="getFlagUrl(cardObjMov.original_language)" alt="flag-country">
            </p>
            <p class="card-text">{{setVoteRate()}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>