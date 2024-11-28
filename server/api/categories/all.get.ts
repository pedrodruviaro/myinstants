import { categoriesController } from "~/server/controllers"

export default defineEventHandler(async (event) => {
  const response = await categoriesController.readAll()
  return response
})
