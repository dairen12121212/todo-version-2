import { SideBar } from "../../Components/SideBar/SideBar";
import useLogin from "../../hooks/useLogin";
import "./HomePage.css";

export const HomePage = () => {
  useLogin();
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <>
      <SideBar />
      <div className="home"></div>
    </>
  );
};
