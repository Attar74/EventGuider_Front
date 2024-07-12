<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="17"
    viewBox="0 0 11 17"
    fill="none"
  >
    <path
      d="M8.98905 9.28199L9.39353 6.72805H6.86455V5.07072C6.86455 4.37201 7.21782 3.69094 8.35048 3.69094H9.5002V1.51654C9.5002 1.51654 8.45686 1.34399 7.45932 1.34399C5.37662 1.34399 4.01528 2.56722 4.01528 4.78159V6.72805H1.7002V9.28199H4.01528V15.456H6.86455V9.28199H8.98905Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  color: {
    default: '#FFF',
    type: String,
  },
});
</script>
