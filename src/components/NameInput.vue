<template>
  <label class="wrapper-input">
    <span class="input__text">
      Ваше имя
    </span>
    <input
        :value="name"
        @input="emits('inputName', $event.target.value)"
        class="input"
        placeholder="Введите ваше имя"
    />
  </label>
</template>

<script lang="ts" setup>
defineProps<{
  name: string,
}>()

const emits = defineEmits<{
  inputName: [name: string],
}>()
</script>

<style lang="scss" scoped></style>