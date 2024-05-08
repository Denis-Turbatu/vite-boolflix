<script>
export default {
    props: {
        cardObj: Object,
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
            <h3 class="card-title">{{cardObj.title}}</h3>
            <p class="card-text">{{cardObj.original_title}}</p>
            <p class="card-text">
            <img :src="getFlagUrl(cardObj.original_language)" alt="Bandiera">
</p>

            <p class="card-text">{{cardObj.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>