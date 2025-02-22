import Footer from "../layouts/footer";
import AddOnItems from "./addOn-items";

const AddOns = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Pick add-ons</h1>
        <p className="text-base">Add-ons help enhance your gaming experience</p>
      </div>
      <AddOnItems />
      <Footer />
    </div>
  );
};

export default AddOns;
