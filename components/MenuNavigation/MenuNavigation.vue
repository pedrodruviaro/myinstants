<script setup lang="ts">
import { HandMetal, Siren } from "lucide-vue-next"

const links = [
  {
    label: "Todos",
    to: "/",
    icon: HandMetal,
  },
  {
    label: "Recents",
    to: "/recents",
    icon: Siren,
  },
]

const { play, pause, playing, currentInstant, progress } = useAudioPlayer()
</script>

<template>
  <aside class="w-64 flex flex-col gap-4 bg-gray-900 h-screen">
    <div class="flex flex-col flex-1 gap-4">
      <div class="p-5">
        <span
          class="text-gray-300 text-base lg:text-xl flex items-center font-bold"
          >🍀Lucky Instants</span
        >
      </div>

      <div class="flex flex-col text-gray-200 lg:text-lg">
        <NuxtLink
          class="px-4 py-3 hover:bg-gray-800 flex items-center gap-2"
          v-for="link in links"
          :key="link.label"
          :to="link.to"
        >
          <Component :is="link.icon" class="w-5 h-5" />
          <span>{{ link.label }}</span>
        </NuxtLink>
      </div>
    </div>

    <div v-if="currentInstant" class="border-t-2 border-gray-800/80">
      <MiniPlayer
        @play="play(currentInstant)"
        @pause="pause"
        :title="currentInstant.title"
        :isPlaying="playing"
        v-model="progress"
      />
    </div>
  </aside>
</template>
