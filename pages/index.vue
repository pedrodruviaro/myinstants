<script setup lang="ts">
import type { Instant } from "~/entities/Instant"

useSeoMeta({
  title: "Todos os instants",
})

const { data } = await useFetch<Instant[]>("/api/instants")

const { play, pause, isAudioTitlePlaying } = useAudioPlayer()

const handlePlayAndPause = (instant: Instant) => {
  if (isAudioTitlePlaying(instant.title)) {
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
      :title="instant.title"
      :audioUrl="instant.audioUrl"
      :isPlaying="isAudioTitlePlaying(instant.title)"
      @play="handlePlayAndPause"
    />
  </div>
</template>
