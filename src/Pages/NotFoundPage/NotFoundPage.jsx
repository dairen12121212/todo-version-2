import { NavLink } from "react-router-dom";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div>NOT FOUND</div>
      <NavLink to="/">Back</NavLink>
    </div>
  );
};
