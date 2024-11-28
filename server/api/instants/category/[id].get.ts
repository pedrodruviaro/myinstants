import { instantsController } from "~/server/controllers"

export default defineEventHandler(async (event) => {
  const categoryId = getRouterParam(event, "id")

  if (!categoryId) {
    throw createError({
      status: 400,
      statusMessage: "Missing required param 'id'",
    })
  }

  const response = await instantsController.readAllByCategoryId(categoryId)
  return response
})
