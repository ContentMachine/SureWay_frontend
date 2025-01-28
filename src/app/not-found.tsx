"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import React from "react";
import "./globals.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const notFound = () => {
  // Router
  const router = useRouter();
  return (
    <AppLayout className="errorContainer">
      <h2>Oops... this page is currently unavailable</h2>
      <Button onClick={() => router.push("/#custom-magnets")}>
        Continue exploring products
      </Button>
    </AppLayout>
  );
};

export default notFound;
