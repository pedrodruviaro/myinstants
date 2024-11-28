import { instantsController } from "~/server/controllers"

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event)

  if (!q) {
    throw createError({
      status: 400,
      statusMessage: "Missing search term 'q'",
    })
  }

  const response = await instantsController.search(String(q))
  return response
})
