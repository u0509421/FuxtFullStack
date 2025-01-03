<template>
  <header class="flex justify-between py-3 px-4">
    <AppLogo to="/" color="text-emerald-600" height="h-12" />
    <div class="flex gap-4">
      <button @click="colorMode.preference = 'light'">Light Mode</button>
      <button @click="colorMode.preference = 'dark'">dark Mode</button>
      <button @click="colorMode.preference = 'system'">System default</button>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode);
</script>
