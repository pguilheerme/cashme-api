import { createCategorySchema } from "@schemas/categorySchema";
import { z } from "zod";

export type CreateCategoryType = z.infer<typeof createCategorySchema>;
export type UpdateCategoryType = CreateCategoryType;
