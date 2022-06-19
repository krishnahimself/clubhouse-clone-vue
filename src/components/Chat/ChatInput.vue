<script setup>
defineProps({
    modelValue: String,
});
</script>

<template>
<input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type='text'
      class='px-3 py-2 m-2 placeholder-gray-200 bg-gray-100 border-none outline-none focus:bg-black rounded-3xl focus:ring-1 ring-brand-100 w-72'
      placeholder='Send Message'
      @keyup.enter="$emit('onEnterKeyPress')"
    />
</template>
