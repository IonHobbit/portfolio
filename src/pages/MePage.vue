<template>
  <div class="space-y-4">
    <img
      alt="Ayion logo"
      src="../assets/logo.png"
      class="w-20 h-auto mx-auto opacity-10 transition-all duration-200 cursor-pointer animate-pulse"
    />
    <div class="space-y-2">
      <h3>Hello, my name is Ayo</h3>
      <p class="text-sm">and this is supposed to be my portfolio</p>
      <p class="text-xs">it'll be done soon, I promise</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "MePage",
  setup() {
    useMeta({
      title: "One Sec | Ayion",
      htmlAttrs: { lang: "en", amp: true },
      meta: [
        {
          property: "og:description",
          content: "Texas! Hold 'em",
        },
        {
          property: "og:title",
          content: "One Sec | Ayion",
        },
      ],
    });
  },
});
</script>
