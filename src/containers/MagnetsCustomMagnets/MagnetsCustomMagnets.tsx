import Button from "@/components/Button/Button";
import React from "react";
import classes from "./MagnetsCustomMagnets.module.css";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities";

const MagnetsCustomMagnets = () => {
  // Router
  const router = useRouter();
  return (
    <div className={classes.container}>
      <h3>Create Custom Magnets</h3>
      <p>
        Try our customiser tool to print your favorite photos on fridge magnets,
        custom buttons and more!
      </p>

      <Button
        type="secondary"
        onClick={() => {
          router.push(routes.CUSTOM_MAGNETS);
        }}
      >
        Customise a magnet
      </Button>
    </div>
  );
};

export default MagnetsCustomMagnets;
