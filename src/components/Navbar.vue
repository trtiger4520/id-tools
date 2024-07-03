<template>
  <div class="flex p-sm items-center">
    <nav class="space-x-sm flex-1">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/ulid">Ulid</RouterLink>
    </nav>
    <div>
      <a
        href="https://github.com/trtiger4520/id-tools"
        target="blank"
      >
        <img
          :src="githubLogo"
          alt="github"
          class="w-6 h-6"
        />
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import githubLogo from '@/assets/github-mark.svg';
</script>
