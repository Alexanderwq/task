<template>
  <p class="address-link" v-html="address">
  </p>
</template>

<script lang="ts" setup>
defineProps<{
  address: string,
}>()
</script>