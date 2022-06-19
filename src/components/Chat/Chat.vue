<script setup>
defineProps({
    msg: Object,
});
</script>

<template>
    <div class='flex flex-col px-3 py-1 my-1 -space-y-1 text-left bg-gray-100 rounded-lg '>
        <span class='text-sm font-semibold text-brand-100'>
            {{ msg.senderName }}
        </span>
        <span class='font-semibold text-gray-300'>{{ msg.message }}</span>
    </div>
</template>
