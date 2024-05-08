<script>
import {store} from './store.js';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <h1>{{this.store.apiKey}}</h1>
</template>

<style lang="scss">

</style>