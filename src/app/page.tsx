import Loader from "@/components/Loader/Loader";
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
