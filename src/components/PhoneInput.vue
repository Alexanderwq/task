<template>
  <label class="wrapper-input">
    <input class="input" placeholder="+7 (" />
    <TooltipInput class="input__icon" />
  </label>
</template>

<script lang="ts" setup>

import TooltipInput from "@/components/TooltipInput.vue";
</script>

<style lang="scss" scoped>
  .wrapper-input {
    display: inline-block;
    position: relative;
    width: 100%;

    & .input {
      padding: 14px 40px 14px 12px;
      border-radius: 12px;
      background: $bg-white-secondary;
      border: 1.5px solid transparent;
      color: $color-black-primary;
      font-feature-settings: $font-settings;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      transition: $transition-default;
      width: 100%;

      &::placeholder {
        color: $color-black-teritaty;
        font-feature-settings: $font-settings;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }

      &:focus {
        border: 1.5px solid $border-new-main-primary;
        outline: none;
      }

      &__icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
    }
  }
</style>