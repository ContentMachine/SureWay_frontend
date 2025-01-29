import { CircularProgress } from "@mui/material";
import Loader from "../Loader/Loader";
import classes from "./Button.module.css";
import React from "react";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "null" | "invalid";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  className,
  icon,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : type === "null"
          ? classes.null
          : type === "invalid"
          ? classes.invalidx
          : classes.primary
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <CircularProgress
          size="1rem"
          color="inherit"
          style={{ color: "#000" }}
        />
      ) : (
        children
      )}
      {icon && <span className={classes.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
