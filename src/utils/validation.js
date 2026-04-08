import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().min(1, "Company Name is required"),
  isAgency: z.boolean({
    required_error: "Please select if you are an agency",
  }),
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6,"Password must be at least 6 characters")
});