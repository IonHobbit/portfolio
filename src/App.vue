<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Ayomide Oluniyi`
    }}</template>
  </metainfo>
  <div class="h-screen w-screen bg-black text-white flex flex-col items-center justify-center absolute">
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

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.gradient {
  --size: 250px;
  --speed: 5s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(158, 82, 57, 85%), hsl(252, 82, 57));
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 400px;
  }
}
</style>
