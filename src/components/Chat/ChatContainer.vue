<script setup>
import ChatLayout from './ChatLayout.vue';
import ChatFeed from './ChatFeed.vue';
import ChatInput from './ChatInput.vue';
import { ref, watch } from 'vue';
import { hmsActions } from '../../utils/hms';
import { hmsStore } from '../../utils/hms';
import { selectBroadcastMessages } from '@100mslive/hms-video-store';
import Chat from './Chat.vue';

const chatInput = ref('');
const storeMessages = ref([]);

const sendMessage = async() => {
    await hmsActions.sendBroadcastMessage(chatInput.value);
    chatInput.value = '';
};

const renderMessages = (messages) => {
    storeMessages.value = messages;
};

watch(storeMessages, async() => {
    const el = document.getElementById('chat-feed');
    if (el) {
        el.scrollTop =  await el.scrollHeight;
    }
});

hmsStore.subscribe(renderMessages, selectBroadcastMessages);
</script>

<template>
    <ChatLayout>
        <ChatFeed>
            <Chat v-for="(message, index) in storeMessages" :key="index" :msg="message" />
        </ChatFeed>
        <ChatInput v-model="chatInput" @onEnterKeyPress="sendMessage"></ChatInput>
    </ChatLayout>
</template>
