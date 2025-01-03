<template>
  <div>控制台</div>
</template>

<script setup lang="ts">
/**
 * 页面元数据
 */
definePageMeta({
  /**
   * 处理一下组件的脚本，一组带 setup 的 script ，里面可以使用 nuxt 提供的 definePageMeta 设置一下这个页面要使用的布局，
   * 提供一个配置对象，里面添加一个 layout，把这个页面使用的布局，设置成 console。这样显示这个页面的时候 ，
   * 就会用到 layouts 目录里的 console 这个布局组件。
   */
  layout: 'console',
});

useHead({
  title: '控制台',
});
</script>
