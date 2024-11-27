import * as cheerio from "cheerio"

const BASE_URL = "https://www.myinstants.com"
const READ_ALL_URL = BASE_URL + "/pt/index/br/"

interface ReadAllResponse {
  title: string
  audioUrl: string
}

export default defineEventHandler(async (event) => {
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
})
