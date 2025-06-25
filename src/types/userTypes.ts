import { createUserSchema, updateUserSchema } from "@schemas/userSchemas";
import { z } from "zod";

export type CreateUserType = z.infer<typeof createUserSchema>;
export type UpdateUserType = z.infer<typeof updateUserSchema>;
