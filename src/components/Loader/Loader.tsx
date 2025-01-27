import Image from "next/image";
import loaderGif from "../../assets/Gifs/loader.gif";
import classes from "./Loader.module.css";
import { CircularProgress } from "@mui/material";

type LoaderTypes = {
  dimensions?: string;
};

const Loader = ({ dimensions }: LoaderTypes) => {
  return (
    <div className={classes.container}>
      <CircularProgress
        size={"2rem"}
        color="inherit"
        style={{ color: "#e5c300" }}
      />
    </div>
  );
};

export default Loader;
