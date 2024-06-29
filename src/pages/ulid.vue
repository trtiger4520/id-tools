<template>
  <div>
    <h1>Ulid</h1>
    <form @submit="submit">
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
        <input
          v-model="ulid"
          name="ulid"
          type="text"
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
        <input
          v-model="guid"
          name="guid"
          type="text"
          class="id-input"
          readonly
        />
      </div>
      <button type="submit">NEW ID</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import id128 from 'id128';
import { CopyTextToClipboard } from '../utils/copy';

const { Ulid, Uuid4 } = id128;

const ulid = ref<string>('');
const guid = ref<string>('');
const submit = (event: Event) => {
  event.preventDefault();
  generateNew();
};
const generateNew = () => {
  const id = Ulid.generate();
  ulid.value = id.toCanonical();
  guid.value = Uuid4.fromRaw(id.toRaw()).toCanonical();
};

onMounted(() => {
  generateNew();
});
</script>
