<template>
  <label class="wrapper-input">
    <input
      :value="phone"
      @input="emits('inputPhone', $event.target.value)"
      class="input"
      placeholder="+7 ("
      v-maska
      data-maska="+7 (###) ###-##-##"
    />
    <TooltipInput class="input__icon" />
  </label>
</template>

<script lang="ts" setup>
import { vMaska } from 'maska';
import TooltipInput from "@/components/TooltipInput.vue";

defineProps<{
  phone: string,
}>()

const emits = defineEmits<{
  inputPhone: [phone: string],
}>()
</script>

<style lang="scss" scoped>
</style>