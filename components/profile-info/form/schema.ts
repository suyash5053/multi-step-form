import * as z from "zod";

export const profileInfoSchema = z.object({
  name: z.string().min(3, "This field is required"),
  email: z.string().email("Invalid email format").nonempty("This field is required"),
  phone: z.string().min(10).max(13).nonempty("This field is required"),
});
