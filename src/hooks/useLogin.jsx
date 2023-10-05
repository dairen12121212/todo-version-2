import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useLogin = () => {
  // хук, который переносит пользователя на страницу логина или регистрации, если он не вошел на сайт.
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
