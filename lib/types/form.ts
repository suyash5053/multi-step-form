import { z } from "zod";
import { profileInfoSchema } from "@/components/profile-info/form/schema";

export type ProfileInfoFormValues = z.infer<typeof profileInfoSchema>;
