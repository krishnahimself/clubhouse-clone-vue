<script setup>
import MicOnIcon from '../icons/MicOnIcon.vue';
import MicOffIcon from '../icons/MicOffIcon.vue';
defineProps({
    active: Boolean,
});
</script>

<template>
    <button class="p-3 rounded-full" :class="active ? 'bg-brand-100' : 'bg-red-600'">
        <MicOnIcon v-if="active" />
        <MicOffIcon v-else />
    </button>
</template>
