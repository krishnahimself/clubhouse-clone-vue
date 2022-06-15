<script setup>
import { ref } from 'vue';

defineProps({
    modelValue: String,
});
</script>

<template>
    <select class="role-selector" :value="modelValue" name="Choose Roles"
        @change="$emit('update:modelValue', $event.target.value)">
        <option value="listener">Listener (can only listen)</option>
        <option value="speaker">Speaker (can speak & listen) </option>
        <option value="moderator">Moderator (is literal god)</option>
    </select>
</template>
