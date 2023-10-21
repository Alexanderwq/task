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
      :code="code"
      :error="codeIsInvalid"
      @handleOnComplete="verifyCode"
      class="verification__inputs"
    />
    <transition name="fade">
      <span
          v-if="codeIsInvalid"
          class="verification__warning"
      >
        Указаны неверные цифры, попробуйте <br/> через смс-код
      </span>
    </transition>
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
import {ref} from "vue";
import {useAuthNavigation} from "@/store/authNavigation";

const authNavigation = useAuthNavigation()
const code = ref<string>('')
const codeIsInvalid = ref<boolean>(false)

function verifyCode() {
  const codeIsCorrect: boolean = api.verifyCode(code.value)
  if (codeIsCorrect) {
    authNavigation.setSection('')
  } else {
    codeIsInvalid.value = true
  }
}

async function resendCode(): Promise<void> {
  try {
    await api.sendNotificationCode('123')
  } catch (e) {
    console.log(e)
  }
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

    &__warning {
      color: $color-critical;
      align-self: center;
      margin-top: 10px;
      font-feature-settings: $font-settings;
      font-size: 13px;
      line-height: 16px;
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
