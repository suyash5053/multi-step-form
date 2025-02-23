import Image from "next/image";
import StepRenderer from "./step-renderer";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/3 h-full relative flex justify-center">
      <Image
        src={"/svgs/bg-sidebar-desktop.svg"}
        alt="Sidebar"
        layout="fill"
        className="rounded-xl object-cover md:block hidden"
      />
      <Image
        src={"/svgs/bg-sidebar-mobile.svg"}
        alt="Sidebar"
        layout="fill"
        className="object-cover md:hidden"
      />
      <StepRenderer />
    </div>
  );
};

export default Sidebar;
