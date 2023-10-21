<template>
  <div class="auth">
    <AuthSection v-if="false" />
    <CodeVerificationSection />
  </div>
</template>

<script lang="ts" setup>
import AuthSection from "@/components/AuthSection.vue";
import CodeVerificationSection from "@/components/CodeVerificationSection.vue";
</script>

<style lang="scss" scoped>
  .auth {
    max-width: 375px;
    margin: 0 auto;
  }
</style>