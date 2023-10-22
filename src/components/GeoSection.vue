<template>
  <div class="geo-section">
    <transition name="slide-fade">
      <ChangeAddressWidget
          v-if="showWidget"
          @close="setShowWidget(false)"
      />
    </transition>

    <img class="geo-section__map" src="./../assets/img/map.png" alt="map" />
    <div class="geo-block">
      <p class="auth__title">
        Где вы находитесь?
      </p>
      <p class="geo-block__subtitle">
        Это поможет показывать только удобные для вас услуги
      </p>
      <div
        @click="setShowWidget(true)"
        class="geo-address"
      >
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
import {ref} from "vue";

const showWidget = ref<boolean>(false)

function setShowWidget(value: boolean): void {
  showWidget.value = value
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-in;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
</style>
