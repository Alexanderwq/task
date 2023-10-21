<template>
  <label class="container">
    <input
      :checked="value"
      @change="emits('change')"
      type="checkbox"
      class="checkbox"
    >
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">

defineProps<{
  value: boolean,
}>()

const emits = defineEmits([
    'change',
])
</script>

<style lang="scss" scoped>
</style>