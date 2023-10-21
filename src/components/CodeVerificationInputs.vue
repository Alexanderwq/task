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
</style>