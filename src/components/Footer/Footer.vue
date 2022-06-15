<script setup>
import UserCount from '../Buttons/UserCount.vue';
import AudioButton from '../Buttons/AudioButton.vue';
import { hmsActions, hmsStore } from '../../utils/hms';
import { selectIsLocalAudioEnabled } from '@100mslive/hms-video-store';
import { ref } from 'vue';
import LeaveButton from '../Buttons/LeaveButton.vue';

const props = defineProps({
    count: Number,
});

const isLocalAudioEnabled = ref(hmsStore.getState(selectIsLocalAudioEnabled));

async function toggleAudio() {
    isLocalAudioEnabled.value = ! isLocalAudioEnabled.value;
    await hmsActions.setLocalAudioEnabled(isLocalAudioEnabled.value);
}
</script>

<template>
    <footer class='flex h-20 bg-gray-100 fixed bottom-0 space-x-4 left-0 w-full items-center justify-center'>
      <UserCount :count="count" />
      <AudioButton :active="isLocalAudioEnabled" @click="toggleAudio"></AudioButton>
      <LeaveButton @click="hmsActions.leave()" />
    </footer>
</template>
