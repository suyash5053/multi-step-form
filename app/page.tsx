import Plans from "@/components/plan";
import ProfileInformation from "@/components/profile-info";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center w-full px-12 py-8">
      <Plans />
      {/* <ProfileInformation /> */}
    </div>
  );
}
