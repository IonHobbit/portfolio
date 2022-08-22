<template>
  <div class="space-y-4">
    <img
      alt="Ayion logo"
      src="../assets/logo.png"
      class="w-20 mx-auto hover:bg-white transition-colors cursor-pointer"
    />
    <div>
      <h3>Welcome to Ayion</h3>
      <p class="text-sm">(hover above the guy above me)</p>
    </div>
    <p class="text-xs">This is not finished btw. (not even by a long shot)</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "MePage",
  setup() {
    useMeta({
      title: "The Ayion",
      htmlAttrs: { lang: "en", amp: true },
      meta: [
        {
          property: "og:description",
          content: "Texas Hold 'em",
        },
        {
          property: "og:title",
          content: "Ayion",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: "Ayion",
        },
        {
          name: "twitter:description",
          content: "The guy",
        },
      ],
    });
  },
});
</script>
