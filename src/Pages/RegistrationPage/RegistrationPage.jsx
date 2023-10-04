import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RegistrationPage.css";

import { NavLink, useNavigate } from "react-router-dom";

import { userRegistration } from "../../store/slices/userSlice";

export const RegistrationPage = () => {
  const login = useSelector((state) => state.userSlice.login);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate("/my-day");
    }
  }, []);

  const onRegistration = (e) => {
    e.preventDefault();
    if (name && surname && password) {
      dispatch(userRegistration({ name, surname, password }));
      navigate("/my-day");
    }
  };
  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__header">Регистрация</div>
        <form className="registration__form" action="#">
          <input
            className="registration__input"
            required
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="registration__input"
            required
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            className="registration__input"
            required
            type="current-password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={(e) => onRegistration(e)}
            className="registration__button"
          >
            Зарегестрироваться
          </button>
        </form>
        <div className="registration__footer">
          <div className="registration__subtitle">Есть аккаунт?</div>
          <NavLink to="/login" className="registration__link">
            Войти!
          </NavLink>
        </div>
      </div>
    </div>
  );
};
