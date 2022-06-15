<script setup>
import { ref } from 'vue';
import Join from './components/Join.vue';
import Room from './components/Room.vue';
import { hmsStore, hmsActions } from './utils/hms';
import { selectIsConnectedToRoom } from '@100mslive/hms-video-store';

const isConnected = ref(false);

function onRoomStateChange(connected) {
    isConnected.value = connected;
}

hmsStore.subscribe(onRoomStateChange, selectIsConnectedToRoom);

window.addEventListener('beforeunload', () => hmsActions.leave());
window.addEventListener('onunload', () => hmsActions.leave());
</script>

<template>
    <div class="page">
        <Room v-if="isConnected" />
        <Join v-else />
    </div>
</template>
