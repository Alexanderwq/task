<template>
  <div class="name-section">
    <p class="auth__title">
      Как к вам обращаться?
    </p>
    <p class="auth__description">
      Расскажите немного о себе, чтобы мастера знали как к вам обращаться
    </p>
    <NameInput
      :name="auth.userInfo.name"
      @inputName="auth.setName"
    />
    <SuccessButton
      @click="saveName"
    >
      <template #text>
        Сохранить
      </template>
    </SuccessButton>
    <a href="/" class="auth__link">
      Перейти к услугам
    </a>
  </div>
</template>

<script lang="ts" setup>
import NameInput from "@/components/NameInput.vue";
import SuccessButton from "@/components/SuccessButton.vue";
import {useAuthStore} from "@/store/authStore";

const auth = useAuthStore()

async function saveName() {
  try {
    await auth.changeName()
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped></style>