<template>
  <div>登陆</div>
</template>

<script setup lang="ts">
/**
 * 页面元数据
 */
definePageMeta({
  /**
   * 处理一下组件的脚本，一组带 setup 的 script ，里面可以使用 nuxt 提供的 definePageMeta 设置一下这个页面要使用的布局，
   * 提供一个配置对象，里面添加一个 layout，把这个页面使用的布局，设置成 blank。这样显示这个页面的时候 ，
   * 就会用到 layouts 目录里的 blank 这个布局组件。
   */
  layout: 'blank',
  colorMode: 'dark',
});

/**
 * 页头
 */
useHead({
  title: '登录',
});
</script>
