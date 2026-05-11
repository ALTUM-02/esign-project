import { type ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;