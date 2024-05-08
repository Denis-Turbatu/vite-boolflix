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
            console.log(this.query);
            store.searchQuery = this.query;
            console.log(this.query);
            this.$emit('filter', this.query);
            console.log(this.query);
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