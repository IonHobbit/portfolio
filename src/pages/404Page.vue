<template>
  <div class="text-center space-y-8">
    <h1>404</h1>
    <p class="text-sm">I'm not getting what you're putting down</p>
    <RouterLink to="/" class="text-sm">Try here</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "404Page",
});
</script>
