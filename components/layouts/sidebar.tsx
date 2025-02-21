import Image from "next/image"
import StepRenderer from "./step-renderer"

const Sidebar = () => {
    return (
        <div className="w-1/3 h-full bg-white relative">
            <Image src={"/svgs/bg-sidebar-desktop.svg"} alt="Sidebar" layout="fill" objectFit="cover" className="rounded-xl" />
            <StepRenderer />
        </div>
    )
}

export default Sidebar