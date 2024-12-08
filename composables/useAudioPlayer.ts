import type { Instant } from "~/entities/Instant"
const currentInstant = ref<Instant | null>(null)
const audioRef = ref<HTMLAudioElement | null>(null)
const progress = ref(0)
const playing = ref(false)
const duration = ref(0)

export function useAudioPlayer() {
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
    playing.value = true

    audioRef.value = new Audio(instant.audioUrl)
    audioRef.value.play()
    audioRef.value.onended = () => {
      pause()
    }

    audioRef.value.ontimeupdate = () => {
      if (!audioRef.value) return

      duration.value = audioRef.value.duration

      progress.value =
        (audioRef.value?.currentTime / audioRef.value?.duration) * 100
    }
  }

  const pause = () => {
    playing.value = false
    audioRef.value?.pause()
    progress.value = 0
  }

  return {
    play,
    pause,
    isAudioPlaying,
    currentInstant,
    progress,
    playing,
    duration,
  }
}
