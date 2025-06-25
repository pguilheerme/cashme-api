import { z } from "zod";

export const loginUserSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email("Invalid email address")
    .min(1, "Email is required"),
  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(6, "Password must be at least 6 characters"),
});
