import Footer from "../layouts/footer";
import PlanCards from "./plan-cards";
import TogglePlan from "./toggle-plan";

const Plans = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Select your plan</h1>
        <p className="text-base">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="h-full pt-6 relative gap-8 flex flex-col">
        <PlanCards />
        <TogglePlan />
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
