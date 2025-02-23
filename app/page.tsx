"use client";

import Footer from "@/components/layouts/footer";
import PageRenderer from "@/helpers/page-renderer";
import { useGlobal } from "@/zustand/global";

export default function Home() {
  const { currentStep } = useGlobal();
  return (
    <div className="flex flex-col h-full md:h-full items-center md:justify-center justify-between w-full md:px-12 md:py-8">
      <div className="md:h-full w-11/12 md:w-full rounded-2xl md:rounded-none p-8 md:p-0 bg-white h-auto">
        <PageRenderer />
      </div>
      {currentStep < 5 && (
        <div className="w-full h-16 bg-white items-center flex px-4 p-2 md:hidden">
          <Footer />
        </div>
      )}
    </div>
  );
}
