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
      :list="addressList"
    />
  </div>
</template>

<script lang="ts" setup>
import SearchInput from "@/components/SearchInput.vue";
import {computed, ref, watch} from "vue";
import AddressList from "@/components/AddressList.vue";
import {useAuthStore} from "@/store/authStore";
import debounce from "lodash.debounce"

const auth = useAuthStore()
const searchString = ref<string>('')
const addressList = ref<string[]>([])

const isSearch = computed(() => searchString.value.length !== 0)

function setSearchString(value: string) {
  searchString.value = value
}

function highLightSearchList(): void {
  addressList.value = addressList.value.map(address => {
    const startIndex = address.indexOf(searchString.value)
    const endIndex = searchString.value.length + startIndex
    const startString = address.slice(0, startIndex)
    const endString = address.slice(endIndex, address.length)
    const highLightString = `<b>${searchString.value}</b>`

    return `${startString}${highLightString}${endString}`
  })
}

watch(searchString, debounce(async () => {
  try {
    addressList.value = await auth.searchAddress(searchString.value)
    highLightSearchList()
  } catch (e) {
    console.log(e)
  }
}, 500))
</script>

<style lang="scss" scoped></style>