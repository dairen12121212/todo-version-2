import "./MyWeakPage.css";

import WeakImg from "../../assets/icons/next-seven-day.svg?react";
import DotsImg from "../../assets/icons/dots.svg?react";
import PlusImg from "../../assets/icons/plus.svg?react";

import { CustomeCheckbox } from "../../Components/CustomeCheckbox/CustomeCheckbox";
import { WeakItems } from "../../Components/Weak-items/Weak-items";

export const MyWeakPage = () => {
  return (
    <div className="weak">
      <div className="weak__container">
        <div className="weak__title">
          <WeakImg className="weak__img" /> Следующие 7 дней
        </div>
        <WeakItems />
      </div>
    </div>
  );
};
