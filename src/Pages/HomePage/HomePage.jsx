import "./HomePage.css";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home__title">Okey LETS GOOO</div>
      <NavLink to="/my-day">click</NavLink>
    </div>
  );
};
