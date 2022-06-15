<script setup>
import Avatar from 'vue-boring-avatars';
</script>

<template>
    <div className='flex flex-col items-center justify-center h-screen'>
      <Avatar size={120} name={username} />
      <Input state={{ username, setUsername }} />
      <Select state={{ role, setRole }} />
      <JoinButton onClick={joinRoom} />
    </div>
</template>
