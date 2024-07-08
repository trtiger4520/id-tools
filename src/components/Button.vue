<template>
  <button
    @click="$emit('click', $event)"
    :disabled="disabled"
    :type="type"
  >
    <i
      v-if="icon"
      :class="icon"
    />
    <slot v-if="$slots['default']" />
    <template v-else-if="text">{{ text }}</template>
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    text?: string;
    icon?: string;
    disabled: boolean;
    type?: HTMLButtonElement['type'];
  }>(),
  {
    disabled: false,
    type: 'button',
  },
);

defineEmits<{
  click: [MouseEvent];
}>();
</script>
