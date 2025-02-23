import { UseFormReturn } from "react-hook-form";
import { ProfileInfoFormValues } from "@/lib/types/form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface TextInputProps {
  form: UseFormReturn<ProfileInfoFormValues>;
  name: keyof ProfileInfoFormValues;
  label: string;
  placeholder: string;
  className?: string;
}

const TextInput = ({ form, name, label, placeholder, className }: TextInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className="flex items-center justify-between h-4">
            <FormLabel className="font-medium">{label}</FormLabel>
            <FormMessage className="font-bold" />
          </div>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={typeof field.value === "string" ? field.value : ""}
              className="h-12"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default TextInput;
