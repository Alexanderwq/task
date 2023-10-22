<template>
  <div class="change-address">
    <p class="change-address__title">
      Введите адрес
    </p>
    <SearchInput
      :value="searchString"
      @input="setSearchString"
    />
    <p
      v-if="!isSearch"
      class="change-address__description"
    >
      Укажите ваш адрес, чтобы мы могли показывать вам более подходящие услуги
    </p>
    <AddressList
      v-if="isSearch"
      :list="['123', '123']"
    />
  </div>
</template>

<script lang="ts" setup>
import SearchInput from "@/components/SearchInput.vue";
import {computed, ref} from "vue";
import AddressList from "@/components/AddressList.vue";

const searchString = ref<string>('')

const isSearch = computed(() => searchString.value.length !== 0)

function setSearchString(value: string) {
  searchString.value = value
}
</script>

<style lang="scss" scoped></style>