<script setup>
import MenuIcon from '../icons/MenuIcon.vue';
import { hmsActions } from '../../utils/hms';

const props = defineProps({
    audioTrack: String,
    id: String,
});

const btnClass = 'flex w-32 text-sm font-semibold hover:bg-gray-800 p-2';

const mutePeer = async() => {
    try {
        await hmsActions.setRemoteTrackEnabled(props.audioTrack, false);
    } catch (error) {
        // Permission denied or invalid track ID or not connected to room
        console.error(error);
    }
};

const changeRole = (role) => {
    hmsActions.changeRole(props.id, role, true);
}
</script>

<template>
    <div class='absolute right-0 top-0 menu-btn z-50'>
        <div as='button' class='bg-gray-900 rounded-md px-1 relative group'>
            <MenuIcon />
        </div>
        <div class='menu-items py-2 flex-col bg-gray-900 text-gray-500 rounded-md'>
            <button :class="btnClass" @click="mutePeer">
                Mute
            </button>
            <button :class="btnClass" @click="changeRole('listener')">
                Make Listener
            </button>
            <button :class="btnClass" @click="changeRole('speaker')">
                Make Speaker
            </button>
        </div>
    </div>
</template>
