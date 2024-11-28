import * as cheerio from "cheerio"
import { ReadAllResponse } from "./types"
import { CATEGORIES_URL } from "~/server/config/url"

export function NewController() {
  async function readAll() {
    const html = await $fetch<string>(CATEGORIES_URL)
    const $ = cheerio.load(html)

    const response: ReadAllResponse[] = []

    $(`[aria-labelledby="categoryDropdown"]`).each((_index, element) => {
      $(element)
        .find(".dropdown-item")
        .each((_, categoryElement) => {
          const name = $(categoryElement).text()
          const elHref = $(categoryElement).attr("href")

          if (!elHref) return

          const id = elHref?.split("/")[3]

          response.push({
            name,
            id,
          })
        })
    })

    return response
  }

  return {
    readAll,
  }
}
