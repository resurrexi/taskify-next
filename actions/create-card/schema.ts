import { z } from "zod"

export const CreateCard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .trim()
    .min(1, { message: "Cannot be blank" }),
  boardId: z.string(),
  listId: z.string(),
})
