<template>
  <div class="geo-section">
    <ChangeAddressWidget />
    <img class="geo-section__map" src="./../assets/img/map.png" alt="map" />
    <div class="geo-block">
      <p class="auth__title">
        Где вы находитесь?
      </p>
      <p class="geo-block__subtitle">
        Это поможет показывать только удобные для вас услуги
      </p>
      <div class="geo-address">
        <p class="geo-address__title">
          Ваш адрес
        </p>
        <p class="geo-address__text">
          Москва, ул. Пушкино, 12
        </p>
      </div>
      <SuccessButton>
        <template #text>
          Сохранить
        </template>
      </SuccessButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SuccessButton from "@/components/SuccessButton.vue";
import ChangeAddressWidget from "@/components/ChangeAddressWidget.vue";
</script>

<style lang="scss" scoped></style>
