"use client";

import Header from "@/containers/Header/Header";
import classes from "./AppLayout.module.css";
import Footer from "@/containers/Footer/Footer";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Modal from "@/components/Modal/Modal";
import InqiryModalBody from "@/containers/InqiryModalBody/InqiryModalBody";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
  isDynamic?: boolean;
};

const AppLayout = ({ children, className, isDynamic }: AppLayoutTypes) => {
  // COntext
  const { modals, setModals } = useContext(AppContext);
  return (
    <>
      {modals?.enquiry && (
        <Modal setState={setModals} body={<InqiryModalBody />} />
      )}

      <main className={`${classes.container}`}>
        <Header isDynamic={isDynamic} />
        <section className={className}>{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default AppLayout;
