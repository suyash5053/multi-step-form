import { z } from "zod";
import { profileInfoSchema } from "@/components/profile-information/form/schema";

export type ProfileInfoFormValues = z.infer<typeof profileInfoSchema>;
