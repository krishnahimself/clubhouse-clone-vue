<script setup>
import User from './Tile/User.vue';
import { ref, reactive, onUnmounted } from 'vue';
import { hmsActions, hmsStore } from '../utils/hms';
import { selectPeers } from '@100mslive/hms-video-store';
import Footer from '../components/Footer/Footer.vue';
import { selectIsLocalAudioEnabled } from '@100mslive/hms-video-store';

const allPeers = ref([]);

const renderPeers = (peers) => {
  allPeers.value = peers;
};

onUnmounted(() => {
    if (allPeers.value.length) {
        hmsActions.leave();
    }
});

hmsStore.subscribe(renderPeers, selectPeers);
</script>

<template>
    <div class='flex flex-col pt-4'>
        <div class='flex justify-between items-start'>
            <div class='flex flex-wrap justify-center items-start w-full '>
                <template v-for="peer in allPeers" :key="peer.id">
                    <User :peer="peer"/>
                </template>
            </div>
            <!-- <ChatContainer /> -->
        </div>
        <Footer :count="allPeers.length" />
    </div>
</template>
