<template>
  <div class="auth">
    <transition name="slide-fade">
      <component
          :is="authNavigation.getCurrentComponent"
      />
    </transition>
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