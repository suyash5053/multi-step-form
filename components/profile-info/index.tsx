import BaseRenderer from "@/helpers/base-renderer";
import ProfileInfoForm from "./form";
import Footer from "../layouts/footer";

const ProfileInformation = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6 justify-between">
      <BaseRenderer
        title="Personal Info"
        description="Please provide your name, email address, and phone number."
      />
      <div className="h-full md:pt-6 relative">
        <ProfileInfoForm />
      </div>
      <div className="bg-white hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default ProfileInformation;
