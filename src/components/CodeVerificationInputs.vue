<template>
  <form class="inputs">
    <VOtpInput
        ref="otpInput"
        :input-classes="['otp-input', { 'error': error, }]"
        :conditionalClass="['one', 'two', 'three', 'four']"
        separator=""
        inputType="letter-numeric"
        :num-inputs="4"
        :value="code"
        :should-auto-focus="true"
        @on-complete="handleOnComplete"
        :placeholder="['0', '0', '0', '0']"
    />
  </form>
</template>

<script lang="ts" setup>
import VOtpInput from "vue3-otp-input";
import {ref} from "vue";

defineProps<{
  code: string,
  error: boolean,
}>()

const emits = defineEmits<{
  handleOnComplete: [code: string],
}>()

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);

function handleOnComplete(code: string) {
  emits('handleOnComplete', code)
}
</script>

<style lang="scss">
  .otp-input {
    width: 52px;
    height: 52px;
    padding: 5px;
    margin: 0 8px;
    border-radius: 12px;
    border: none;
    text-align: center;
    background: $bg-white-secondary;
    color: #000;
    font-feature-settings: $font-settings;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    transition: .15s ease-in-out;

    &::placeholder {
      text-align: center;
      color: #000;
      font-feature-settings: $font-settings;
      font-size: 32px;
      line-height: 32px;
      font-weight: 500;
      opacity: .1;
    }

    &:focus {
      outline: none;
    }

    &.error {
      border: 1px solid $color-critical !important;
    }
  }
</style>