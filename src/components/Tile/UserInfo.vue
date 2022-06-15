<script setup>
import MicOnIcon from '../icons/MicOnIcon.vue';
import MicOffIcon from '../icons/MicOffIcon.vue';
import Avatar from 'vue-boring-avatars';

const props = defineProps({
    peer: Object,
    audioEnabled: Boolean,
});
</script>

<template>
    <div class='absolute w-full h-full flex flex-col items-center justify-center text-center z-20'>
        <p class='font-bold text-sm'>{{ peer.name }}</p>
        <p class='flex items-center font-semibold text-gray-400 text-xs'>
            <MicOnIcon v-if="audioEnabled" stroke='#FFF' height="15" />
            <MicOffIcon v-else stroke='#ff677d' height="15" />
            {{ peer.roleName }}
        </p>
    </div>
    <div class='opacity-50'>
        <Avatar variant='marble' :size="90" :name="peer.name" />
    </div>
</template>
