<template>
  <div class="gradient"></div>
  <div class="space-y-4 absolute left-0 text-left px-8 md:px-20">
    <div class="space-y-4">
      <h3>Ayomide Oluniyi</h3>
      <p class="text-base">Frontend Engineer</p>
      <a href="https://directory.nulll.xyz" target="_blank" class="text-sm underline">My projects</a>
    </div>
    <div class="flex items-center space-x-4">
      <a v-for="link in links" :key="link.name" :href="link.url" target="_blank">
        <div v-html="link.icon"></div>
      </a>
    </div>
  </div>
  <div class=" absolute right-0 px-8 md:px-20">
    <img alt="Ayion logo" src="../assets/logo.png"
      class="w-16 h-auto mx-auto opacity-10 transition-all duration-200 cursor-pointer animate-pulse" />
  </div>
</template>

<script lang="ts">
import { useMeta } from "vue-meta";

export default {
  name: "MePage",
  setup() {
    useMeta({
      title: "Ayomide Oluniyi",
      htmlAttrs: { lang: "en", amp: true },
      meta: [
        {
          name: "keywords",
          content: "Ayomide Oluniyi, Ayion, Ayomide, Oluniyi",
        },
        {
          name: "author",
          content: "Ayomide Oluniyi",
        },
        {
          property: "og:title",
          content: "Ayomide Oluniyi",
        },
      ],
    });
    const links = [
      {
        name: 'Github',
        url: 'http://github.com/IonHobbit',
        icon: `<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
          <path fill="currentColor"
            d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z" />
        </svg>`
      },
      {
        name: 'Linkedin',
        url: 'http://linkedin.com/in/ayomide-oluniyi',
        icon: `<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <path fill="currentColor"
          d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" />
        </svg>`
      },
      {
        name: 'Mail',
        url: 'mailto:ayorg360@gmail.com',
        icon: `<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <path fill="currentColor"
          d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422" />
        </svg>`
      },
    ]

    return { links }
  },
};
</script>
