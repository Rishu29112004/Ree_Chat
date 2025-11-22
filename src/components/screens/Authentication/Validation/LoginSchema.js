// src/validation/loginSchema.js
import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    password: z
        .string()
        .nonempty("Password is required")
        .min(4, "Password must be at least 4 characters")
});
