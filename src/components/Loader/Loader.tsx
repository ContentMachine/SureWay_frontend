import Image from "next/image";
import loaderGif from "../../assets/Gifs/loader.gif";
import classes from "./Loader.module.css";

type LoaderTypes = {
  dimensions?: string;
};

const Loader = ({ dimensions }: LoaderTypes) => {
  return (
    <div className={classes.container}>
      <Image
        src={loaderGif}
        alt="Loader"
        style={{
          width: dimensions || undefined,
          height: dimensions || undefined,
        }}
      />
    </div>
  );
};

export default Loader;
