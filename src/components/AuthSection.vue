<template>
  <div class="auth-section">
    <h3 class="auth-section__title">
      Авторизация
    </h3>
    <p class="auth-section__description">
      Войдите или зарегистрируйтесь, чтобы
      <br/>
      продолжить
    </p>
    <PhoneInput
      :phone="phone"
      @inputPhone="setPhone"
      class="auth-section__input"
    />
    <AgreementBlock
      :checked="checkedAgreement"
      @change="checkedAgreement = !checkedAgreement"
    >
      <template #text>
        <p class="auth-agreement-text">
          Я ознакомился и принимаю
          <a href="/" class="auth__link">правила сервиса</a>
          и
          <a href="/" class="auth__link">
            политики конфидициальности
          </a>
        </p>
      </template>
    </AgreementBlock>

    <SuccessButton
      @click="handleAuth"
      class="auth-submit"
    >
      <template #text>
        Авторизоваться
      </template>
    </SuccessButton>
  </div>
</template>

<script lang="ts" setup>
import PhoneInput from "@/components/PhoneInput.vue";
import AgreementBlock from "@/components/AgreementBlock.vue";
import SuccessButton from "@/components/SuccessButton.vue";
import {ref} from "vue";
import api from "@/api/api";
import {useAuthNavigation} from "@/store/authNavigation";
import {useAuthStore} from "@/store/authStore";

const auth = useAuthStore()
const authNavigation = useAuthNavigation()
const phone = ref<string>('')
const checkedAgreement = ref<boolean>(true)

function setPhone(changedPhone: string): void {
  phone.value = changedPhone
}

async function handleAuth(): Promise<void> {
  if (phone.value.length < 18) return
  if (!checkedAgreement.value) return

  try {
    const isAuth: boolean = await api.isAuth(phone.value)
    auth.setAuthStatus(isAuth)
    api.sendNotificationCode(phone.value)
    authNavigation.setSection('CodeVerificationSection')
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    &-agreement-text {
      text-align: left;
      color: $color-black-primary;
      font-feature-settings: $font-settings;
      font-size: 15px;
      line-height: 20px;
      margin-top: -4px;
    }

    &-submit {
      margin-top: 16px;
    }

    &__link {
      background: $gradient-main-primary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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
      }

      &__input {
        margin: 24px 0 16px;
      }
    }
  }
</style>