<script setup>
import { ref } from 'vue';
import Join from './components/Join.vue';
import Room from './components/Room.vue';

const isConnected = ref(false);
</script>

<template>
    <div class="page">
        <Room v-if="isConnected" />
        <Join v-else />
    </div>
</template>
