<template>
  <div class="address-list">
    <template
      v-for="(address, index) in list"
      :key="index"
    >
      <AddressLink
        :address="address"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import AddressLink from "@/components/AddressLink.vue";

defineProps<{
  list: string[],
}>()
</script>

<style lang="scss" scoped></style>