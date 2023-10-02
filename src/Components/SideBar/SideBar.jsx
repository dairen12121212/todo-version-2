import { Header } from "../Header/Header";
import { NavMenu } from "../NavMenu/NavMenu";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <Header />
      <NavMenu />
    </div>
  );
};
