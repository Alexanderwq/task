<template>
  <button class="success-button">
    <slot name="text"></slot>
  </button>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  .success-button {
    color: $color-default;
    text-align: center;
    font-feature-settings: $font-settings;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    background: $gradient-main-primary;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
  }

</style>