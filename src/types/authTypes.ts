import { loginUserSchema } from "@schemas/authSchemas";
import { z } from "zod";

export type LoginUserType = z.infer<typeof loginUserSchema>;
