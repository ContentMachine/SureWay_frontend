import Loader from "@/components/Loader/Loader";
import OnboardingTour from "@/components/OnboardingTourContext/OnboardingTourContext";
import TawkToChat from "@/components/TawkToChat/TawkToChat";
import Homepage from "@/containers/Homepage/Homepage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <TawkToChat />
      <Homepage />
    </Suspense>
  );
}
