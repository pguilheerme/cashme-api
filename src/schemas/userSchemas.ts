import { z } from "zod";

export const createUserSchema = z.object({
  first_name: z
    .string({ invalid_type_error: "First name must be a string" })
    .min(1, "First name is required"),
  last_name: z
    .string({ invalid_type_error: "Last name must be a string" })
    .min(1, "Last name is required"),
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email("Invalid email address")
    .min(1, "Email is required"),
  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(6, "Password must be at least 6 characters"),
});

export const updateUserSchema = z.object({
  first_name: z
    .string({ invalid_type_error: "First name must be a string" })
    .min(2, "First name must be at least 2 characters")
    .optional(),
  last_name: z
    .string({ invalid_type_error: "Last name must be a string" })
    .min(2, "Last name must be at least 2 characters")
    .optional(),
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email("Invalid email address")
    .optional(),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
    })
    .min(6, "Password must be at least 6 characters")
    .optional(),
});
