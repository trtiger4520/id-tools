<template>
  <button
    type="button"
    :class="{
      'bg-green-300': success,
      'bg-blue-300': copying,
    }"
    @click="OnClick"
  >
    <i
      :class="{
        'i-material-symbols-check': success,
        'i-material-symbols-content-copy': !success,
      }"
    ></i>
    COPY
  </button>
</template>
<script lang="ts" setup>
import { CopyTextToClipboard } from '@/utils/copy';
import { debounce } from 'lodash';

const props = defineProps<{
  text: string;
}>();

const copying = ref(false);
const success = ref(false);

const OnClick = async (e: Event) => {
  e.preventDefault();
  e.stopPropagation();

  copying.value = true;

  const result = await CopyTextToClipboard(props.text);

  copying.value = false;
  success.value = result;
};

const DebounceReset = debounce(() => {
  success.value = false;
}, 2000);

watch(success, (val) => val && DebounceReset());
</script>
