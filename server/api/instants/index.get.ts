import { instantsController } from "~/server/controllers"

export default defineEventHandler(async (event) => {
  const response = await instantsController.readAll()
  return response
})
