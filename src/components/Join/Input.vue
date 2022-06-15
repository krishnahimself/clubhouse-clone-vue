<script setup>
import { ref } from 'vue';

defineProps({
    modelValue: String,
});

const input = ref(null);
</script>

<template>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="px-6 py-3 my-5 text-center placeholder-gray-200 bg-gray-100 border-none outline-none w-80 focus:bg-black rounded-3xl focus:ring-1 ring-brand-100"
      type="text"
      placeholder="Enter Username"
    />
</template>
