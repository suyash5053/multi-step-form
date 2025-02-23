import BaseRenderer from "@/helpers/base-renderer";
import Footer from "../layouts/footer";
import AddOnItems from "./addOn-items";

const AddOns = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <BaseRenderer
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <AddOnItems />
      <Footer />
    </div>
  );
};

export default AddOns;
