<template>
  <Container>
    <h1 class="mt-none">Ulid</h1>
    <div class="mb-sm">
      <form
        @submit="Submit"
        @reset="Reset"
      >
        <div class="mr-3 inline-block">
          <label for="count">Count: </label>
          <input
            id="count"
            v-model="count"
            type="number"
            name="count"
            min="1"
            max="100"
          />
        </div>
        <Button
          type="submit"
          text="Generate ID(s)"
        />
        <Button
          type="reset"
          class="ml-3"
          text="Reset"
        />
        <span class="mx-3">|</span>
        <div class="inline-block">
          <input
            id="autoConvert"
            v-model="autoConvert"
            type="checkbox"
            name="autoConvert"
            class="mr-1"
          />
          <label for="autoConvert">Auto Convert</label>
        </div>
      </form>
    </div>
    <div class="mb-lg">
      <div class="flex items-center space-x-sm">
        <label
          for="ulid"
          class="text-xl"
          >ULID</label
        >
        <CopyBtn :text="ulidContent" />
        <div class="flex-1" />
        <Button
          icon="i-material-symbols-close"
          text="CLEAR"
          @click="() => (ulidContent = '')"
        />
      </div>
      <textarea
        id="ulid"
        v-model="ulidContent"
        name="ulid"
        class="id-input"
        rows="10"
        @input="OnUlidTextAreaInput"
      />
      <div>
        <Button
          :disabled="autoConvert"
          :title="autoConvert ? 'auto convert is enabled' : undefined"
          @click="ConvertToGuid"
          text="Convert to ULID"
        />
      </div>
    </div>
    <div>
      <div class="flex items-center space-x-sm">
        <label
          for="guid"
          class="text-xl"
          >GUID</label
        >
        <CopyBtn :text="guidContent" />
        <div class="flex-1" />
        <Button
          icon="i-material-symbols-close"
          text="CLEAR"
          @click="() => (guidContent = '')"
        />
      </div>
      <textarea
        id="guid"
        v-model="guidContent"
        name="guid"
        class="id-input"
        rows="10"
        @input="OnGuidTextAreaInput"
      />
      <div>
        <Button
          :disabled="autoConvert"
          :title="autoConvert ? 'auto convert is enabled' : undefined"
          @click="ConvertToUlid"
          text="Convert to ULID"
        />
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import id128 from 'id128';
import { RegexDefinitions } from '@/utils/regex';
import debounce from 'lodash/debounce';
import { useStorage } from '@vueuse/core';
import Button from '@/components/Button.vue';

const { Ulid, Uuid } = id128;

const count = useStorage('generate-count', 1);
const autoConvert = useStorage('enable-auto-convert', true);

const ulidContent = ref<string>('');
const guidContent = ref<string>('');

const Submit = (event: Event) => {
  event.preventDefault();
  Generate();
};

const Reset = (event: Event) => {
  event.preventDefault();
  count.value = 1;
  ulidContent.value = '';
  guidContent.value = '';
};

const Generate = () => {
  const results = new Array(count.value).fill(null).map(() => GenerateNew());

  ulidContent.value = results.map((result) => result.ulid).join('\n');
  guidContent.value = results.map((result) => result.guid).join('\n');
};

const GenerateNew = () => {
  const id = Ulid.generate();
  const ulid = id.toCanonical();
  const guid = Uuid.fromRaw(id.toRaw()).toCanonical();

  return {
    ulid,
    guid,
  };
};

const OnUlidTextAreaInput = (ev: Event) => {
  ev.preventDefault();
  if (!autoConvert.value) {
    return;
  }

  DebounceConvertToGuid();
};

const OnGuidTextAreaInput = (ev: Event) => {
  ev.preventDefault();
  if (!autoConvert.value) {
    return;
  }

  DebounceConvertToUlid();
};

const DebounceConvertToGuid = debounce(() => {
  ConvertToGuid();
}, 300);

const DebounceConvertToUlid = debounce(() => {
  ConvertToUlid();
}, 300);

const ConvertToUlid = () => {
  const results = [] as string[];
  const parsedList = guidContent.value.match(new RegExp(RegexDefinitions.GUID, 'gim'));

  if (!parsedList) {
    return;
  }

  for (const parsed of parsedList) {
    try {
      const guid = Uuid.fromCanonical(parsed);
      const ulid = Ulid.fromRaw(guid.toRaw()).toCanonical();
      results.push(ulid);
    } catch (error) {
      continue;
    }
  }

  ulidContent.value = results.join('\n');
};

const ConvertToGuid = () => {
  const results = [] as string[];
  const parsedList = ulidContent.value.match(new RegExp(RegexDefinitions.ULID, 'gim'));

  if (!parsedList) {
    return;
  }

  for (const parsed of parsedList) {
    try {
      const ulid = Ulid.fromCanonical(parsed);
      const guid = Uuid.fromRaw(ulid.toRaw()).toCanonical();
      results.push(guid);
    } catch (error) {
      continue;
    }
  }

  guidContent.value = results.join('\n');
};

watch(count, () => Generate());

onMounted(() => {
  Generate();
});
</script>
