import BaseRenderer from "@/helpers/base-renderer";
import Footer from "../layouts/footer";
import PlanCards from "./plan-cards";
import TogglePlan from "./toggle-plan";

const Plans = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <BaseRenderer
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <div className="h-full md:pt-6 relative gap-8 flex flex-col justify-between md:justify-normal">
        <PlanCards />
        <TogglePlan />
      </div>
      <div className="md:block hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Plans;
