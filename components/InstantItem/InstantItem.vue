<script setup lang="ts">
import { Play, Pause } from "lucide-vue-next"
import type { Instant } from "~/entities/Instant"

const props = defineProps<{
  id: string
  title: string
  audioUrl: string
  isPlaying: boolean
}>()

const emits = defineEmits<{
  (e: "play", instant: Instant): void
}>()

const togglePlayPause = () => {
  emits("play", { id: props.id, title: props.title, audioUrl: props.audioUrl })
}
</script>

<template>
  <div class="grid grid-cols-[max-content_1fr] gap-2 items-center">
    <Button
      variant="outline"
      size="icon"
      class="rounded-full"
      :class="{
        'animate-pulse': props.isPlaying,
      }"
      @click="togglePlayPause"
    >
      <Pause class="w-4 h-4" v-if="props.isPlaying" />
      <Play class="w-4 h-4" v-else />
    </Button>
    <p class="text-gray-200 text-sm md:text-base">{{ props.title }}</p>
  </div>
</template>
