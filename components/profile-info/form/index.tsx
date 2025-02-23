"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileInfoSchema } from "./schema";
import { Form } from "@/components/ui/form";
import TextInput from "./text-input";
import { ProfileInfoFormValues } from "@/lib/types/form";
import { useGlobal } from "@/zustand/global";

const ProfileInfoForm = () => {
  const { currentStep, setCurrentStep, setForm } = useGlobal();
  const form = useForm<ProfileInfoFormValues>({
    resolver: zodResolver(profileInfoSchema),
  });

  useEffect(() => {setForm(form)}, [form, setForm])

  const onSubmit = (data: ProfileInfoFormValues) => {
    console.log(data);
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 h-full bg-white"
        >
          <TextInput
            form={form}
            name="name"
            label="Name"
            placeholder="John Doe"
            className="space-y-1"
          />
          <TextInput
            form={form}
            name="email"
            label="Email Address"
            placeholder="abc@gmail.com"
            className="space-y-1"
          />
          <TextInput
            form={form}
            name="phone"
            label="Phone"
            placeholder="1234567890"
            className="space-y-1"
          />
        </form>
      </Form>
    </>
  );
};

export default ProfileInfoForm;
