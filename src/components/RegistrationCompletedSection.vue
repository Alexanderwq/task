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
</style>
