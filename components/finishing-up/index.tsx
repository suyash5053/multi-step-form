import BaseRenderer from "@/helpers/base-renderer";
import Footer from "../layouts/footer";
import Summary from "./summary";

const FinishingUp = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <BaseRenderer
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <Summary />
      <Footer />
    </div>
  );
};

export default FinishingUp;
