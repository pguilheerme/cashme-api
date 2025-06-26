import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  userId: z.string().min(1, "User ID is required"),
});
