<script>
import { store } from '../store.js';
import axios from "axios";


export default {
    props: {
        card: Object,
    },
    data() {
        return {
            curRating: Math.floor(this.card.vote_average / 2),
            store,
            castNames: [],
            isCastLoaded: false,
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
        getCast(){
            let movie_id = this.card.id;
            console.log(movie_id);
            axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, { params: { api_key: this.store.apiKey} })
            .then((resp) =>{
                if (this.isCastLoaded) return;

                let iterations = 0
                if (resp.data.cast.length < 5){
                    iterations = resp.data.cast.length;
                    console.log(iterations);
                }else{
                    iterations = 5;
                    console.log(iterations);
                }
                for (let i = 0; i < iterations; i++) {
                    console.log(resp.data.cast[i].name);
                    this.castNames.push(resp.data.cast[i].name);
                    console.log(this.castNames);
                }
                this.isCastLoaded = true;
            })
        }
    }
}
</script>

<template>
    <div>
        <div class="card-body d-flex flex-column align-items-center mb-5 text-white">
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
                        <button class="bg-danger border-0 p-2 my-4 rounded text-white fw-semibold"
                            @click="getCast">Dettagli Cast</button>
                        <ul v-if="isCastLoaded" class="text-decoration-none">
                            <li v-for="name in castNames" :key="name">{{ name }}</li>
                        </ul>
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
ul{
    padding: 0;
}

li{
    list-style-type: none;
}
</style>