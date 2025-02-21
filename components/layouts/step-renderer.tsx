import { steps } from "@/lib/steps"

const StepRenderer = () => {
    return (
        <div className="absolute top-0 left-0 flex flex-col gap-8 p-8">
                {steps.map((step) => (
                    <div key={step.number} className="flex items-center space-x-4 h-10">
                        <div className="w-10 h-10 border border-white text-white rounded-full flex items-center justify-center">
                            {step.number}
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-400 leading-1">{step.label}</p>
                            <p className=" text-base leading-1 font-semibold text-white">{step.title}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default StepRenderer