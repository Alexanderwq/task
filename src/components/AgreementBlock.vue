<template>
  <div class="agreement">
    <AgreementCheckbox />
    <slot name="text"></slot>
  </div>
</template>

<script lang="ts" setup>
import AgreementCheckbox from "@/components/AgreementCheckbox.vue";
</script>

<style lang="scss" scoped>
  .agreement {
    display: flex;
    gap: 12px;
  }
</style>