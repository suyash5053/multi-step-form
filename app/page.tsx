import AddOns from "@/components/add-ons";
import FinishingUp from "@/components/finishing-up";
import Plans from "@/components/plan";
import ProfileInformation from "@/components/profile-info";
import ThankYou from "@/components/thank-you";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center w-full px-12 py-8">
      {/* <ProfileInformation /> */}
      {/* <Plans /> */}
      {/* <AddOns /> */}
      <FinishingUp />
      {/* <ThankYou /> */}
    </div>
  );
}
