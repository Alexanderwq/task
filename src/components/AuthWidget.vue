<template>
  <div class="auth">
    <component
      :is="authNavigation.getCurrentComponent"
    />
  </div>
</template>

<script lang="ts" setup>
  import {useAuthNavigation} from "@/store/authNavigation";

  const authNavigation = useAuthNavigation()
</script>

<style lang="scss" src="../assets/css/auth.scss"></style>
<style lang="scss" scoped>
  .auth {
    max-width: 375px;
    margin: 0 auto;
  }
</style>