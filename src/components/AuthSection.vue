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
      :phone="auth.userInfo.phone"
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
const checkedAgreement = ref<boolean>(true)

function setPhone(changedPhone: string): void {
  auth.userInfo.phone = changedPhone
}

async function handleAuth(): Promise<void> {
  if (auth.userInfo.phone.length < 18) return
  if (!checkedAgreement.value) return

  try {
    const isAuth: boolean = await api.isAuth(auth.userInfo.phone)
    auth.setAuthStatus(isAuth)
    api.sendNotificationCode(auth.userInfo.phone)
    authNavigation.setSection('CodeVerificationSection')
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped>
</style>