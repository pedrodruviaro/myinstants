import slugify from "slugify"
import type { Instant } from "~/entities/Instant"

export function useAudioPlayer() {
  const currentInstant = ref<Instant | null>(null)
  const audioRef = ref<HTMLAudioElement | null>(null)

  const isAudioTitlePlaying = (title: string) => {
    if (!currentInstant.value) {
      return false
    }

    return slugify(title) === slugify(currentInstant.value?.title)
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
    isAudioTitlePlaying,
  }
}
