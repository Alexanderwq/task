<template>
  <div class="agreement">
    <AgreementCheckbox
      :value="checked"
      @change="emits('change')"
    />
    <slot name="text"></slot>
  </div>
</template>

<script lang="ts" setup>
import AgreementCheckbox from "@/components/AgreementCheckbox.vue";

defineProps<{
  checked: boolean,
}>()

const emits = defineEmits([
  'change',
])
</script>

<style lang="scss" scoped>
  .agreement {
    display: flex;
    gap: 12px;
  }
</style>