<template>
  <div class="verification">
    <h3 class="verification__title">
      Авторизация
    </h3>
    <p class="verification__description">
      Войдите или зарегистрируйтесь, чтобы
      <br/>
      продолжить
    </p>
    <CodeVerificationInputs
      @handleOnComplete="resendCode"
      class="verification__inputs"
    />
    <span
      @click="resendCode"
      class="verification__resend"
    >
      Нет звонка? Получить смс-код
    </span>
    <SuccessButton>
      <template #text>
        Авторизоваться
      </template>
    </SuccessButton>
  </div>
</template>

<script lang="ts" setup>
import CodeVerificationInputs from "@/components/CodeVerificationInputs.vue";
import api from "@/api/api";
import SuccessButton from "@/components/SuccessButton.vue";

function resendCode() {
  api.sendNotificationCode('123')
}
</script>

<style lang="scss">
  .verification {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__resend {
      background: $gradient-main-primary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-feature-settings: $font-settings;
      font-size: 13px;
      font-weight: 500;
      margin: 16px 0 32px;
      align-self: center;
      cursor: pointer;
    }

    &__inputs {
      align-self: center;
    }

    &__title {
      color: $color-black-primary;
      font-feature-settings: $font-settings;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 4px;
    }

    &__description {
      color: $color-black-secondary;
      font-feature-settings: $font-settings;
      font-size: 15px;
      line-height: 20px;
      text-align: left;
      margin-bottom: 24px;
    }
  }
</style>
