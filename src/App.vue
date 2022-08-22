<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Ayomide Oluniyi`
    }}</template>
  </metainfo>
  <div class="h-screen w-screen bg-black text-white flex flex-col justify-center">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
