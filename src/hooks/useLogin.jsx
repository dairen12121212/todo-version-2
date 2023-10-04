import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useLogin = () => {
  const login = useSelector((state) => state.userSlice.login);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location != "/login" && !login) {
      navigate("/login");
    }
  });
};

export default useLogin;
