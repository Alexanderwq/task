<template>
  <div class="verification">
    <BackButton
      @click="authNavigation.setSection(ComponentNames.AuthSection)"
    />
    <h3 class="auth__title">
      Введите последние 4 цифры входящего номера
    </h3>
    <p class="auth__description">
      Отвечать на звонок не нужно. Мы уже звоним на
      <br/>
      номер {{ auth.userInfo.phone }}
    </p>
    <CodeVerificationInputs
      code=""
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
    <AgreementBlock
      v-if="!auth.isAuth"
      :checked="checkedAgreement"
      @change="checkedAgreement = !checkedAgreement"
    >
      <template #text>
        <p class="verification-agreement">
          Я принимаю
          <a href="/" class="verification-agreement__link">условия соглашения</a>
          и соглашаюсь с обработку
          <a href="/" class="verification-agreement__link">персональных данных</a>
        </p>
      </template>
    </AgreementBlock>
    <AgreementBlock
        v-if="!auth.isAuth"
        :checked="isSubscription"
        @change="isSubscription = !isSubscription"
    >
      <template #text>
        <p class="verification-agreement">
          Хочу получать сообщения рекламного и информационного характера
        </p>
      </template>
    </AgreementBlock>
    <SuccessButton
      :loading="loadingButton"
    >
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
import {useAuthStore} from "@/store/authStore";
import AgreementBlock from "@/components/AgreementBlock.vue";
import BackButton from "@/components/BackButton.vue";
import ComponentNames from "@/types/ComponentNames";

const auth = useAuthStore()
const authNavigation = useAuthNavigation()
const codeIsInvalid = ref<boolean>(false)
const checkedAgreement = ref<boolean>(true)
const isSubscription = ref<boolean>(false)
const loadingButton = ref<boolean>(false)

async function verifyCode(code: string) {
  if (!checkedAgreement.value) return

  loadingButton.value = true
  const codeIsCorrect: boolean = await api.verifyCode(code)
  loadingButton.value = false
  if (!codeIsCorrect) {
    return codeIsInvalid.value = true
  }

  if (!auth.isAuth) {
    return authNavigation.setSection(ComponentNames.RegistrationCompletedSection)
  }
  authNavigation.setSection(ComponentNames.AuthSection)
}

async function resendCode(): Promise<void> {
  try {
    await api.sendNotificationCode(auth.userInfo.phone)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss">
</style>
