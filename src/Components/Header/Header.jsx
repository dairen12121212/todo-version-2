import React from "react";

import "./Header.css";

import SettingLogo from "../../assets/icons/setting.svg?react";
import LogoutIgm from "../../assets/icons/logout.svg?react";
import { useSelector, useDispatch } from "react-redux";

import { userLogout } from "../../store/slices/userSlice";

export const Header = () => {
  const { userName, userSurname } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <SettingLogo className="header__img" />
        </div>
        <div className="header__info">
          <div className="header__title header__name">{userName}</div>
          <div className="header__title header__surname">{userSurname}</div>
        </div>
      </div>
      <div onClick={() => dispatch(userLogout())} className="header__logout">
        <LogoutIgm className="header__img" />
      </div>
    </header>
  );
};
