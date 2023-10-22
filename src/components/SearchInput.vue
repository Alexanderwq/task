<template>
  <label class="wrapper-input">
    <span class="input__text">
      Ваш адрес
    </span>
    <input
        :value="value"
        @input="emits('input', $event.target.value)"
        class="input"
        placeholder="Поиск"
    />
  </label>
</template>

<script lang="ts" setup>
defineProps<{
  value: string,
}>()

const emits = defineEmits<{
  input: [name: string],
}>()
</script>

<style lang="scss" scoped></style>