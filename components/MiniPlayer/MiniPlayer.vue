<script setup lang="ts">
import { Drum, Pause, Play } from "lucide-vue-next"

const props = defineProps<{
  isPlaying: boolean
  title: string
  duration: number
}>()

const emits = defineEmits<{
  (e: "play"): void
  (e: "pause"): void
}>()

const handleToggle = () => {
  if (props.isPlaying) {
    emits("pause")
    return
  }

  emits("play")
}

const progress = defineModel<number>({ required: true })

const durationInMinutes = computed(() => Math.floor(props.duration / 60))
</script>

<template>
  <div class="flex flex-col gap-2 p-3">
    <p class="text-xs text-gray-200">Tocando agora...</p>
    <p class="text-gray-200 -mt-1">{{ props.title }}</p>
    <div class="flex gap-2">
      <div>
        <Button
          variant="outline"
          size="icon"
          class="rounded-full"
          :class="{
            'animate-pulse': props.isPlaying,
          }"
          @click="handleToggle"
        >
          <Pause class="w-4 h-4" v-if="props.isPlaying" />
          <Play class="w-4 h-4" v-else />
        </Button>
      </div>

      <div class="w-full gap-2 flex justify-center items-center">
        <span class="text-xs">00:00</span>
        <Slider
          :model-value="[progress]"
          :default-value="[0]"
          :max="100"
          :step="1"
        />
        <span class="text-xs">{{ props.duration }}</span>
      </div>
    </div>
  </div>
</template>
