<script>
import {store} from "../store";
export default {
    data() {
        return {
            query: "",
        }
    },
    methods: {
        emitSaveQuery() {
            store.searchQuery = this.query;
            this.$emit('filter', this.query);
        }
    },
}
</script>

<template>
    <!-- container -->
    <header class="bg-black d-flex py-4 justify-content-between align-items-center">
        <div class="ms-5">
            <a href="#" class="text-decoration-none">
                <h1 class="text-danger fw-semibold">BOOLFLIX</h1>
            </a>
        </div>
        <!-- searchbar -->
        <div class="me-5">
            <input type="text" v-model="query" placeholder="Cerca un film...">
            <!-- search-button -->
            <button @click="emitSaveQuery">Cerca</button>
        </div>

    </header>
</template>

<style lang="scss" scoped>

</style>