<script setup lang="ts">
/**
 * 属性
 */
type Props = {
  wrapper?: string;
  variant?: 'full' | 'text' | 'graph'; // full就显示全部，text只显示文字logo，graph只显示图片logo
  color?: string;
  height?: string;
  to?: string; // 链接的路由地址
  text?: string; // 标志文本包装上的类
  graph?: string; // 标志图像上的类
};

/**
 * default value for props，如果不设置这些属性，就使用默认值
 */
const props = withDefaults(defineProps<Props>(), {
  wrapper: 'flex gap-3',
  variant: 'full',
  height: 'h-8',
});

/**
 * logo的颜色，声明一个 color，它是一个计算属性，里面用 let 声明一个 value，最后返回这个 value 的值。
 * 在上面判断一下 props.color，如果使用这个组件的时候设置了 color 属性，可以让 value 等于 props.color 。
 * else，不然的话，就让 value 等于 text-black dark:text-white，浅色主题是黑色，深色主题使用白色。
 */
const color = computed(() => {
  let value;

  if (props.color) {
    value = props.color;
  } else {
    value = 'text-balck dark:text-white';
  }
  return value;
});

/**
 * 是否显示logo的文字部分，计算属性数据 showText，用一下 computed，它的值表示的就是是否显示标志的文字部分
 * 如果 props.variant 等于 full 或者 props.variant 等于 text 的时候，showText 的值就会是 true。
 */
const showText = computed(() => {
  return props.variant === 'full' || props.variant === 'text';
});

/**
 * 是否显示logo的图形部分，计算属性数据 showGraph，用一下 computed，它的值表示的就是是否显示标志的图形部分
 * 如果 props.variant 等于 full 或者 props.variant 等于 graph 的时候，showGraph 的值就会是 true。
 */
const showGraph = computed(() => {
  return props.variant === 'full' || props.variant === 'graph';
});
</script>

<style scoped lang="postcss">
.logo {
  .mask {
    display: inline-block;
    background-color: currentColor;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }

  .graph {
    aspect-ratio: 1 / 1;
    mask-image: url('/images/logo-graph.svg');
  }
  .text {
    aspect-ratio: 16 / 9;
    mask-image: url('/images/logo-text.svg');
  }
}
</style>

<template>
  <div
    :class="['logo', wrapper, height, color, { 'cursor-pointer': to }]"
    @click="to ? navigateTo(to) : null"
  >
    <div :class="graph" v-if="showGraph">
      <span :class="['mask graph', height]"></span>
    </div>
    <div :class="text" v-if="showText">
      <span :class="['mask text', height]"></span>
    </div>
  </div>
</template>
