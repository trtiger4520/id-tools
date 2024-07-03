<template>
  <div class="p-sm">
    <h1>Ulid</h1>
    <form @submit="Submit">
      <div>
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
      <br />
      <button type="submit">Generate ID(s)</button>
      <hr />
      <div>
        <label for="ulid">ULID</label>
        <button
          class="copy-btn"
          type="button"
          @click="CopyTextToClipboard(ulidContent)"
        >
          copy
        </button>
        <br />
        <textarea
          id="ulid"
          v-model="ulidContent"
          name="ulid"
          class="id-input"
          rows="10"
          @change.prevent="ConvertToGuid"
        />
      </div>
      <div>
        <label for="guid">GUID</label>
        <button
          class="copy-btn"
          type="button"
          @click="CopyTextToClipboard(guidContent)"
        >
          copy
        </button>
        <br />
        <textarea
          id="guid"
          v-model="guidContent"
          name="guid"
          class="id-input"
          rows="10"
          @change.prevent="ConvertToUlid"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import id128 from 'id128';
import { CopyTextToClipboard } from '@/utils/copy';
import { RegexDefinitions } from '@/utils/regex';

const { Ulid, Uuid } = id128;

const count = ref(1);

const ulidContent = ref<string>('');
const guidContent = ref<string>('');

const Submit = (event: Event) => {
  event.preventDefault();
  Generate();
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
