import Loader from "@/components/Loader/Loader";
import Homepage from "@/containers/Homepage/Homepage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Homepage />
    </Suspense>
  );
}
