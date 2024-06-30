<template>
  <div>
    <h1>Ulid</h1>
    <form @submit="submit">
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
          @click="CopyTextToClipboard(ulid)"
        >
          copy
        </button>
        <br />
        <textarea
          id="ulid"
          v-model="ulid"
          name="ulid"
          class="id-input"
          readonly
        />
      </div>
      <div>
        <label for="guid">GUID</label>
        <button
          class="copy-btn"
          type="button"
          @click="CopyTextToClipboard(guid)"
        >
          copy
        </button>
        <br />
        <textarea
          id="guid"
          v-model="guid"
          name="guid"
          class="id-input"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import id128 from 'id128';
import { CopyTextToClipboard } from '../utils/copy';

const { Ulid, Uuid } = id128;

const count = ref(1);

const ulid = ref<string>('');
const guid = ref<string>('');

const submit = (event: Event) => {
  event.preventDefault();
  generate();
};

const generate = () => {
  const results = new Array(count.value).fill(null).map(() => generateNew());

  ulid.value = results.map((result) => result.ulid).join('\n');
  guid.value = results.map((result) => result.guid).join('\n');
};

const generateNew = () => {
  const id = Ulid.generate();
  const ulid = id.toCanonical();
  const guid = Uuid.fromRaw(id.toRaw()).toCanonical();

  return {
    ulid,
    guid,
  };
};

watch(count, () => generate());

onMounted(() => {
  generate();
});
</script>
