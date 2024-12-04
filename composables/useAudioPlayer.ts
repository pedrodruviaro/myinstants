import slugify from "slugify"
import type { Instant } from "~/entities/Instant"

export function useAudioPlayer() {
  const currentInstant = ref<Instant | null>(null)
  const audioRef = ref<HTMLAudioElement | null>(null)

  const isAudioPlaying = (id: string) => {
    if (!currentInstant.value) {
      return false
    }

    return id === currentInstant.value.id
  }

  const play = (instant: Instant) => {
    // cleans the current audio to play a new one
    pause()

    currentInstant.value = instant

    audioRef.value = new Audio(instant.audioUrl)
    audioRef.value.play()
  }

  const pause = () => {
    audioRef.value?.pause()
    currentInstant.value = null
  }

  return {
    play,
    pause,
    isAudioPlaying,
  }
}
