"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import React from "react";
import "./globals.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const notFound = () => {
  // Router
  const router = useRouter();
  return (
    <AppLayout className="errorContainer">
      <Image
        src="https://res.cloudinary.com/dfilepe0f/image/upload/v1738688560/Sureway_Loading_Animation_vl5vgd.gif"
        height={300}
        width={300}
        alt="Loader"
      />
      <h2>Oops... this feature is coming soon!</h2>
      <Button onClick={() => router.push("/#custom-magnets")}>
        Continue exploring products
      </Button>
    </AppLayout>
  );
};

export default notFound;
