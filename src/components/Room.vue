<script setup>
import User from './Tile/User.vue';
import { ref, reactive, onUnmounted } from 'vue';
import { hmsActions, hmsStore, hmsNotifications, HMSNotificationTypes } from '../utils/hms';
import { selectPeers } from '@100mslive/hms-video-store';
import Footer from '../components/Footer/Footer.vue';
import { selectPeerMetadata } from '@100mslive/hms-video-store';
import ChatContainer from './Chat/ChatContainer.vue';
import { useToast } from 'vue-toast-notification';

const allPeers = ref([]);

const toast = useToast();

const renderPeers = (peers) => {
  allPeers.value = peers;
};

onUnmounted(() => {
console.log(HMSNotificationTypes);
    if (allPeers.value.length) {
        hmsActions.leave();
    }
});

hmsStore.subscribe(renderPeers, selectPeers);

hmsNotifications.onNotification((notification) => {
    switch (notification.type) {
        case HMSNotificationTypes.METADATA_UPDATED:
            const peer = notification.data;
            const { isHandRaised } = hmsStore.getState(selectPeerMetadata(peer.id))
            if (isHandRaised && !peer.isLocal) {
                toast.success(`${peer.name} raised their hand.`)
            }
            break;
    }
});
</script>

<template>
    <div class='flex flex-col pt-4'>
        <div class='flex items-start justify-between'>
            <div class='flex flex-wrap items-start justify-center w-full '>
                <template v-for="peer in allPeers" :key="peer.id">
                    <User :peer="peer"/>
                </template>
            </div>
            <ChatContainer />
        </div>
        <Footer :count="allPeers.length" />
    </div>
</template>
