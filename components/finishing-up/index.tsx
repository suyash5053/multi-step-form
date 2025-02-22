import Footer from "../layouts/footer";
import Summary from "./summary";

const FinishingUp = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <Summary />
      <Footer />
    </div>
  );
};

export default FinishingUp;
