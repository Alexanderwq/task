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
import {useAuthNavigation} from "@/store/authNavigation";
import Position from "@/types/Position";
import api from "@/api/api";
import ComponentNames from "@/types/ComponentNames";

const auth = useAuthStore()
const authNavigation = useAuthNavigation()

async function setGeoLocation(position: Position): Promise<void> {
  try {
    const address: string = await api.getCurrentPosition(position.coords)
    auth.setGeoLocation(
        {
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          address: address,
        })
  } catch (e) {
    console.log(e)
  }

}

async function saveName() {
  try {
    const geoLocation: Position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    setGeoLocation(geoLocation)
  } catch (e) {
    console.log(e)
  }

  try {
    await auth.changeName()
    authNavigation.setSection(ComponentNames.GeoSection)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped></style>