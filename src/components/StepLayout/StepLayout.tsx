import classes from "./StepLayout.module.css";
import useUpdateSearchPRams from "@/hooks/useUpdateSearchParams";

type UserOnboardingLayoutProps = {
  children: React.ReactNode;
  notShowHeader?: boolean;
  steps: number[];
};

const StepLayout = ({ children, steps }: UserOnboardingLayoutProps) => {
  // Hooks
  const updateSearchParams = useUpdateSearchPRams();

  // Steps

  const userStep = updateSearchParams("step", undefined, "get");

  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.body}>
          <div className={classes.stepIndicator}>
            {steps.map((data) => {
              return (
                <div
                  className={`${classes.step} ${
                    userStep && userStep >= data.toString()
                      ? classes.active
                      : classes.inActive
                  }`}
                  key={data}
                >
                  <hr />
                  <span>{data}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.children}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default StepLayout;
