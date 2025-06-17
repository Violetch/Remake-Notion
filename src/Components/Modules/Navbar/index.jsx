import BigScreen from "./BigScreen";
import { useMediaQuery } from "react-responsive";
import SmallScreen from "./SmallScreen";

const Navbar = () => {
  const isScreen = useMediaQuery({ query: "(max-width: 1080px)" });

  return <>{isScreen ? <SmallScreen /> : <BigScreen />}</>;
};

export default Navbar;
