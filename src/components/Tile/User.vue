<script setup>
import UserTile from './UserTile.vue';
import Permission from '../Roles/Roles.vue';
import UserWrapper from './UserWrapper.vue';
import UserInfo from './UserInfo.vue';
import { hmsStore } from '../../utils/hms.js';
import { selectPeerAudioByID } from '@100mslive/hms-video-store';
import { selectIsPeerAudioEnabled } from '@100mslive/hms-video-store';
import { selectLocalPeer } from '@100mslive/hms-video-store';
import { ref } from 'vue';

const props = defineProps({
    peer: Object,
});

const level = ref(hmsStore.getState(selectPeerAudioByID(props.peer.id)) || 0);
const audioEnabled = ref(hmsStore.getState(selectIsPeerAudioEnabled(props.peer.id)));
const localPeer = hmsStore.getState(selectLocalPeer);
const isModerator = localPeer.roleName === 'moderator';

const onAudioChange = (newAudioState) => {
    audioEnabled.value = newAudioState;
};

const updateAudioLevel = (audioLevel) => {
    level.value = audioLevel;
};

hmsStore.subscribe(onAudioChange, selectIsPeerAudioEnabled(props.peer.id));
hmsStore.subscribe(updateAudioLevel, selectPeerAudioByID(props.peer.id));
</script>

<template>
    <UserTile>
        <Permission v-if="isModerator" :id="peer.id" :audioTrack="peer.audioTrack" />
        <UserWrapper :level="level">
            <UserInfo :audioEnabled="audioEnabled" :peer="peer" />
        </UserWrapper>
    </UserTile>
</template>
