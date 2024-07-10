<script>
    import { store } from "../store";
    export default {
        data() {
            return {
                query: "",
                routes: [
                    {
                        routeName: "home",
                        title: 'Home', 
                    },
                    {
                        routeName: "movies",
                        title: 'Movies', 
                    },
                    {
                        routeName: "series",
                        title: 'Series', 
                    },
                ]
            };
        },
        methods: {
            emitSaveQuery() {
                store.searchQuery = this.query;
                this.$emit("filter", this.query);
            }
        }
    };
</script>

<template>
    <!-- container -->
    <div class="ms-header">
        <header class="bg-black d-flex py-4 justify-content-between align-items-center container">
            <div class="ms-5">
                <a href="#" class="text-decoration-none">
                    <h1 class="text-danger fw-semibold">BOOLFLIX</h1>
                </a>
            </div>
            <div>
                <ul class="ms-navbar">
                    <li v-for="link in routes" :key="link">
                        <router-link :to="{ name: link.routeName }" class="text-decoration-none">{{ link.title
                            }}</router-link>
                    </li>
                </ul>
            </div>
            <!-- searchbar -->
            <div class="me-5">
                <input type="text" v-model="query" placeholder="Cerca un film..." @keyup.enter="emitSaveQuery" />
                <!-- search-button -->
                <button @click="emitSaveQuery">Cerca</button>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
    .ms-header {
        border-bottom: solid 1px #343434;
    }
</style>