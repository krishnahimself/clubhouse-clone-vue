<script setup>
import UsersIcon from '../icons/UsersIcon.vue';

const props = defineProps({
    count: Number,
});
</script>

<template>
    <div class='flex items-center px-6 py-3 bg-gray-800 text-white font-bold  rounded-3xl space-x-2'>
        <UsersIcon />
        <p class='inline-block'>{{ count }}</p>
    </div>
</template>
