import Button from "@/components/Button/Button";
import classes from "./MagnetMagnetTypes.module.css";
import Image from "next/image";
import { magnetTypes } from "@/utilities/products";
import { useRouter } from "next/navigation";
import { useMagnetTypes } from "@/hooks/useMagnets";
import { useMemo } from "react";
import { magnetTypeTypes } from "@/utilities/types";
import Loader from "@/components/Loader/Loader";
import { routes } from "@/utilities";

const MagnetMagnetTypes = () => {
  // Router
  const router = useRouter();

  // Requests
  const { data: magnetTypesData, isLoading } = useMagnetTypes();

  // Memo
  const magnetTypes: magnetTypeTypes[] = useMemo(
    () => magnetTypesData?.data,
    [magnetTypesData]
  );

  console.log(magnetTypes, magnetTypesData, "MagnetTypes");

  return (
    <section className={classes.container}>
      {isLoading ? (
        <Loader />
      ) : (
        magnetTypes?.map((data) => {
          return (
            <div className={classes.product} key={data?._id}>
              <div>
                <Image
                  src={data?.image}
                  alt={data?.name}
                  width={100}
                  height={100}
                />
              </div>
              <h3>{data?.name}</h3>
              <p>{data?.description}</p>
              <Button
                onClick={() => {
                  if (data?.type === "custom") {
                    router.push(`#${data?.slug}`);
                  } else {
                    router.push(`${routes.MAGNETS}/${data?.slug}`);
                  }
                }}
              >
                Purchase {data?.name}
              </Button>
            </div>
          );
        })
      )}
    </section>
  );
};

export default MagnetMagnetTypes;
