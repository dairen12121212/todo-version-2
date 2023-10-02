import React from "react";

import "./Header.css";

import SettingLogo from "../../assets/icons/setting.svg?react";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <SettingLogo className="header__img" />
      </div>
      <div className="header__info">
        <div className="header__title header__name">Danil</div>
        <div className="header__title header__surname">Masalov</div>
      </div>
    </header>
  );
};
