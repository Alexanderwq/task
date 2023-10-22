<template>
  <button class="success-button">
    <slot
      v-if="!loading"
      name="text"
    ></slot>
    <span v-else class="loading">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </span>
  </button>
</template>

<script lang="ts" setup>
  withDefaults(defineProps<{
    loading: boolean,
  }>(), {
    loading: false,
  })
</script>

<style lang="scss" scoped>
  .success-button {
    color: $color-default;
    text-align: center;
    font-family: $font-mulish;
    font-weight: 700;
    font-feature-settings: $font-settings;
    font-size: 15px;
    line-height: 20px;
    background: $gradient-main-primary;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
  }

  .loading {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    display: block;
    margin: 5px 0;
    animation: 1s infinite alternate-reverse scale;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: .2s;
    }

    &:nth-child(3) {
      animation-delay: .4s;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(.2);
    }

    70% {
      transform: scale(1);
    }
  }
</style>