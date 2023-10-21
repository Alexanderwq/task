<template>
  <div class="registration-completed">
    <img class="registration-completed__icon" src="./../assets/img/success-icon.png" alt="icon" />
    <h3 class="registration-completed__title">
      Регистрация завершена
    </h3>
    <p class="registration-completed__text">
      Теперь вам нужно заполнить профиль
    </p>
    <SuccessButton class="registration-completed__button">
      <template #text>
        Отлично
      </template>
    </SuccessButton>
  </div>
</template>

<script lang="ts" setup>

import SuccessButton from "@/components/SuccessButton.vue";
</script>

<style lang="scss" scoped>
  .registration-completed {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 150px 16px 16px 16px;

    &__icon {
      max-width: 150px;
      align-self: center;
    }

    &__title {
      margin: 55px 0 5px;
      color: $color-black-primary;
      text-align: center;
      font-feature-settings: $font-settings;
      font-size: 24px;
    }

    &__text {
      color: $color-black-secondary;
      text-align: center;
      font-feature-settings: $font-settings;
      font-size: 14px;
      line-height: 20px;
    }

    &__button {
      margin-top: auto;
    }
  }
</style>
