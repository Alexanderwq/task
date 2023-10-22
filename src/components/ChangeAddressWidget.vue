<template>
  <div class="change-address">
    <p class="change-address__title">
      Введите адрес
    </p>
    <SearchInput
      :value="searchString"
      @input="setSearchString"
    />
    <p class="change-address__description">
      Укажите ваш адрес, чтобы мы могли показывать вам более подходящие услуги
    </p>
  </div>
</template>

<script lang="ts" setup>
import SearchInput from "@/components/SearchInput.vue";
import {ref} from "vue";

const searchString = ref<string>('')

function setSearchString(value: string) {
  searchString.value = value
}
</script>

<style lang="scss" scoped></style>