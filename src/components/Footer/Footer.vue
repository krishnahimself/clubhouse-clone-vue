<script setup>
import UserCount from '../Buttons/UserCount.vue';
import AudioButton from '../Buttons/AudioButton.vue';
import { hmsActions, hmsStore } from '../../utils/hms';
import { selectIsLocalAudioEnabled, selectLocalPeerID, selectPeerMetadata } from '@100mslive/hms-video-store';
import { ref } from 'vue';
import LeaveButton from '../Buttons/LeaveButton.vue';
import HandRaiseOnIcon from '../icons/HandRaiseOnIcon.vue';
import HandRaiseOffIcon from '../icons/HandRaiseOffIcon.vue';

const props = defineProps({
    count: Number,
});

const isLocalAudioEnabled = ref(hmsStore.getState(selectIsLocalAudioEnabled));
const isLocalHandRaised = ref(false);

async function toggleAudio() {
    isLocalAudioEnabled.value = ! isLocalAudioEnabled.value;
    await hmsActions.setLocalAudioEnabled(isLocalAudioEnabled.value);
}

async function toggleRaiseHand() {
    const localPeerId = hmsStore.getState(selectLocalPeerID);
    const metadata = hmsStore.getState(selectPeerMetadata(localPeerId));
    const newMetadata = { ...metadata, isHandRaised: !metadata.isHandRaised };
    isLocalHandRaised.value = newMetadata.isHandRaised;
    await hmsActions.changeMetadata(newMetadata);
}
</script>

<template>
    <footer class='fixed bottom-0 left-0 flex items-center justify-center w-full h-20 space-x-4 bg-gray-100'>
      <UserCount :count="count" />
      <HandRaiseOnIcon v-if="isLocalHandRaised" @click="toggleRaiseHand" />
      <HandRaiseOffIcon v-else @click="toggleRaiseHand" />
      <AudioButton :active="isLocalAudioEnabled" @click="toggleAudio"></AudioButton>
      <LeaveButton @click="hmsActions.leave()" />
    </footer>
</template>
