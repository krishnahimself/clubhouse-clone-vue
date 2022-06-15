<script setup>
import Avatar from 'vue-boring-avatars';
import Input from '../components/Join/Input.vue';
import Select from '../components/Join/Select.vue';
import JoinButton from '../components/Join/JoinButton.vue';
import { ref } from 'vue';
import getToken from '../utils/getToken.js';
import { useHMSActions } from '../composables/useHMSActions.js';

const hmsActions = useHMSActions();
const role = ref('speaker');
const username = ref('');

const joinRoom = () => {
    getToken(role.value)
        .then((token) => {
            hmsActions.join({
                userName: username.value || 'Anonymous',
                authToken: token,
                settings: {
                    isAudioMuted: true,
                },
                initEndpoint : import.meta.env.VUE_APP_HMS_INIT_PEER_ENPOINT || undefined
            });
        })
        .catch((error) => {
            console.log('Token API Error', error);
        });
}
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <Avatar :size="120" :name="username" />
      <Input v-model="username" />
      <Select v-model="role"></Select>
      <JoinButton @click="joinRoom" />
    </div>
</template>
