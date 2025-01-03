<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="flex gap-4 items-center">
      <UButton color="primary"> 按钮 </UButton>
      <div class="text-primary-500">创建初创</div>
      <div class="h-4 w-12 bg-gray-800"></div>
      <UButton padded color="green" @click="appConfig.ui.primary = 'green'"></UButton>
      <UButton padded color="violet" @click="appConfig.ui.primary = 'violet'"></UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
