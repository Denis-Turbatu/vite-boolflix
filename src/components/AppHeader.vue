<script>
    import { store } from "../store";
    export default {
        data() {
            return {
                query: "",
                isActive: false,
                routes: [
                    {
                        routeName: "home",
                        title: "Home"
                    },
                    {
                        routeName: "movies",
                        title: "Movies"
                    },
                    {
                        routeName: "series",
                        title: "Series"
                    }
                ]
            };
        },
        methods: {
            emitSaveQuery() {
                store.searchQuery = this.query;
                this.$emit("filter", this.query);
            },
            extendSearch() {
                this.isActive = !this.isActive;
            },
            handleClick(){
                this.emitSaveQuery()
                this.extendSearch();
            }
        }
    };
</script>

<template>
    <!-- container -->
    <div class="ms-header">
        <header class="bg-black d-flex py-4 justify-content-between align-items-center container">
            <div class="ms-5 ms-logo">
                <a href="#" class="text-decoration-none">
                    <img src="../assets/Logonetflix.png" alt="netflix-logo" class="img-fluid" />
                </a>
            </div>
            <ul class="ms-navbar d-flex gap-5 list-unstyled justify-content-center m-0">
                <li v-for="link in routes" :key="link">
                    <router-link :to="{ name: link.routeName }" class="text-decoration-none text-white ms-routes">{{ link.title
                        }}</router-link>
                </li>
            </ul>

            <!-- searchbar -->
            <div class="me-5">
                <input type="text" v-model="query" placeholder="Cerca un film..." @keyup.enter="emitSaveQuery" :class="{active: isActive}" class="ms-search-input"/>
                <!-- search-button -->
                <button @click="handleClick" class="ms-search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
    .ms-header {
        border-bottom: solid 1px #343434;
    }

    .ms-logo {
        width: 150px;
    }


    .ms-routes{
        padding-bottom: 35px;
    }

    .router-link-exact-active {
        border-bottom: solid 2px red;
    }

    .ms-search-btn{
        border: none;
        background-color: #000000;
        color: #ffffff;
    }

    .ms-search-input{
        border: solid 1px #ffffff;
        border-radius: 8px;
        padding: 5px;
        background-color: #000000;
        color: #ffffff;
        opacity: 0;
        transition: opacity 0.3s ease-in-out
    }
    .ms-search-input:focus-visible{
        outline: none;
    }

    .active{
        opacity: 1;
    }
</style>