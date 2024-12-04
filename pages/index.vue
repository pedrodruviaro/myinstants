<script setup lang="ts">
import type { Instant } from "~/entities/Instant"

useSeoMeta({
  title: "Todos os instants",
})

const { data } = await useFetch<Instant[]>("/api/instants")

const { play, pause, isAudioPlaying, playing } = useAudioPlayer()

const handlePlayAndPause = (instant: Instant) => {
  if (isAudioPlaying(instant.id)) {
    pause()
    return
  }

  play(instant)
}
</script>

<template>
  <div class="space-y-2">
    <InstantItem
      v-for="instant in data"
      :key="instant.title"
      :id="instant.id"
      :title="instant.title"
      :audioUrl="instant.audioUrl"
      :isPlaying="playing && isAudioPlaying(instant.id)"
      @play="handlePlayAndPause"
    />
  </div>
</template>
