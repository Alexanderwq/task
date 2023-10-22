<template>
  <div class="tooltip">
    <transition name="fade">
      <div
          v-if="showTooltip"
          class="tooltip-info"
      >
        <img
            @click="closeTooltip"
            class="tooltip-info__close"
            src="./../assets/svg/tooltip-close.svg"
            alt="close"
        />
        <p class="tooltip-info__text">
          На этот номер вы получите смс с кодом подтверждения и информацию о записи
        </p>
      </div>
    </transition>

    <img
      @click="toggleTooltip"
      class="tooltip__icon"
      src="./../assets/svg/tooltip.svg"
      alt="icon"
    />
  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";

  const showTooltip = ref<boolean>(false);

  function toggleTooltip() {
    showTooltip.value = !showTooltip.value;
  }

  function closeTooltip() {
    showTooltip.value = false;
  }
</script>

<style lang="scss" scoped>
  .tooltip {
    position: relative;
    
    &__icon {
      cursor: pointer;
    }

    &-info {
      background: #fff;
      border-radius: 12px;
      box-shadow: 2.01835px 4.0367px 15.13762px 0 rgba(0, 0, 0, 0.24);
      backdrop-filter: blur(7.568807601928711px);
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(calc(-100% - 10px));
      padding: 10px;

      &__close {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
      }

      &__text {
        color: $color-black-primary;
        font-feature-settings: $font-settings;
        font-size: 13px;
        width: 165px;
        font-family: $font-inter;
        text-align: left;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>