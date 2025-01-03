<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="flex gap-4">
      <UButton color="blue" variant="solid" size="xl" :ui="ui">
        按钮
        <template #leading>
          <UAvatar
            src="https://avatars.githubusercontent.com/u/1585696?v=4"
            size="xs"
          ></UAvatar>
        </template>
      </UButton>
      <UButton @click="appConfig.ui.button.font = 'font-medium'">加粗</UButton>
      <UButton @click="appConfig.ui.button.font = 'font-light'">变细</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const ui = /*ui*/ { rounded: 'rounded-full' };
</script>
