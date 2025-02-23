import BaseRenderer from "@/helpers/base-renderer";
import ProfileInfoForm from "./form";

const ProfileInformation = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <BaseRenderer title="Personal Info" description="Please provide your name, email address, and phone number." />
      <div className="h-full pt-6 relative">
        <ProfileInfoForm />
      </div>
    </div>
  );
};

export default ProfileInformation;
