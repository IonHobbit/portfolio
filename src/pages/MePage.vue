<template>
  <div class="space-y-4">
    <img
      alt="Ayion logo"
      src="../assets/logo.png"
      class="
        w-20
        h-auto
        mx-auto
        hover:bg-white
        transition-all
        cursor-pointer
        animate-bounce
      "
    />
    <div class="space-y-2">
      <h3>Hello, my name is Ayo</h3>
      <p>and this is supposed to be my portfolio lol</p>
    </div>
    <p class="text-sm">(hover above the guy above the guy above me)</p>
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
      ],
    });
  },
});
</script>
