import Image from "next/image";
import StepRenderer from "./step-renderer";

const Sidebar = () => {
  return (
    <div className="md:w-1/3 h-full bg-white relative sm:w-screen">
      <Image
        src={"/svgs/bg-sidebar-desktop.svg"}
        alt="Sidebar"
        layout="fill"
        className="rounded-xl object-cover"
      />
      <StepRenderer />
    </div>
  );
};

export default Sidebar;
