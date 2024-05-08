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
                default:
                return `https://flagcdn.com/48x36/${languageCode}.png`;
            }
        }

    }
}
</script>

<template>
    <div>
        <div class="card-body">
            <h3 class="card-title">{{cardObjMov.title}}</h3>
            <p class="card-text">{{cardObjMov.original_title}}</p>
            <p class="card-text">
            <img :src="getFlagUrl(cardObjMov.original_language)" alt="flag-country">
</p>

            <p class="card-text">{{cardObjMov.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>