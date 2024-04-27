<template>
  <div>
    <svg
      class="mx-auto my-auto"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      :fill="props.fill"
      :fill-opacity="props['fill-opacity']"
    >
      <slot />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  fill: string;
  'fill-opacity': string;
  width: number;
  height: number;
}

const props = defineProps<Props>();
</script>
