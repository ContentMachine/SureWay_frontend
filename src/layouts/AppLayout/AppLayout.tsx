import Header from "@/containers/Header/Header";
import classes from "./AppLayout.module.css";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const AppLayout = ({ children, className }: AppLayoutTypes) => {
  return (
    <main className={`${classes.container} ${className}`}>
      <Header />
      {children}
      {/* Footer */}
    </main>
  );
};

export default AppLayout;
