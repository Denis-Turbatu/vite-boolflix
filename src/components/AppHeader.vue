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
    <div>
        <!-- searchbar -->
        <input type="text" v-model="query" placeholder="Cerca un film...">
        <!-- search-button -->
        <button @click="emitSaveQuery">Cerca</button>
    </div>
</template>

<style lang="scss" scoped></style>