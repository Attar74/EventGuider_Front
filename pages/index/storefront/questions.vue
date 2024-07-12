<template>
  <div class="overflow-y-scroll h-[99vh]">
    <Questions :header="false" :actions="false" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
});
</script>
