import { ReactNode } from "react";

interface TypeLandinglayout {
  children: ReactNode;
}

const LandingLayout = ({ children }: TypeLandinglayout) => {
  return <main className="h-full relative bg-neutral-100">{children}</main>;
};

export default LandingLayout;
