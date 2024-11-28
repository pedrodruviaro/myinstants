import * as cheerio from "cheerio"
import { ReadAllResponse } from "./types"
import {
  BASE_URL,
  CATEGORIES_INSTANTS_READ_ALL_URL,
  READ_ALL_URL,
  RECENTS_URL,
  SEARCH_URL,
} from "~/server/config/url"

export function NewController() {
  async function readAll() {
    const html = await $fetch<string>(READ_ALL_URL)
    const $ = cheerio.load(html)

    const response: ReadAllResponse[] = []

    $(".instant").each((_index, element) => {
      const title = $(element).children(".instant-link").text()
      const audio = $(element).children(".small-button").attr("onclick")

      if (!audio) {
        return
      }

      const audioUrlChunks = audio.split("'")
      const audioPath = audioUrlChunks[1]

      response.push({
        title,
        audioUrl: BASE_URL + audioPath,
      })
    })

    return response
  }

  async function readAllByCategoryId(categoryId: string) {
    const html = await $fetch<string>(
      `${CATEGORIES_INSTANTS_READ_ALL_URL}${categoryId}`
    )
    const $ = cheerio.load(html)

    const response: ReadAllResponse[] = []

    $(".instant").each((_index, element) => {
      const title = $(element).children(".instant-link").text()
      const audio = $(element).children(".small-button").attr("onclick")

      if (!audio) {
        return
      }

      const audioUrlChunks = audio.split("'")
      const audioPath = audioUrlChunks[1]

      response.push({
        title,
        audioUrl: BASE_URL + audioPath,
      })
    })

    return response
  }

  async function recents() {
    const html = await $fetch<string>(RECENTS_URL)
    const $ = cheerio.load(html)

    const response: ReadAllResponse[] = []

    $(".instant").each((_index, element) => {
      const title = $(element).children(".instant-link").text()
      const audio = $(element).children(".small-button").attr("onclick")

      if (!audio) {
        return
      }

      const audioUrlChunks = audio.split("'")
      const audioPath = audioUrlChunks[1]

      response.push({
        title,
        audioUrl: BASE_URL + audioPath,
      })
    })

    return response
  }

  async function search(q: string) {
    const html = await $fetch<string>(`${SEARCH_URL}?name=${q}`)
    const $ = cheerio.load(html)

    const response: ReadAllResponse[] = []

    $(".instant").each((_index, element) => {
      const title = $(element).children(".instant-link").text()
      const audio = $(element).children(".small-button").attr("onclick")

      if (!audio) {
        return
      }

      const audioUrlChunks = audio.split("'")
      const audioPath = audioUrlChunks[1]

      response.push({
        title,
        audioUrl: BASE_URL + audioPath,
      })
    })

    return response
  }

  return {
    readAll,
    readAllByCategoryId,
    recents,
    search,
  }
}
