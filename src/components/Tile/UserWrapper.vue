<script setup>
const props = defineProps({
    level: Number,
});
</script>

<template>
    <div class='rounded-full relative' :style="{'boxShadow': `0px 0px ${level || 0 / 4}px #3d5afe`}">
        <slot />
    </div>
</template>
