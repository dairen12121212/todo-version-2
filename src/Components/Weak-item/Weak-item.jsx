import "./Weak-item.css";

import DotsImg from "../../assets/icons/dots.svg?react";
import { CustomeCheckbox } from "../../Components/CustomeCheckbox/CustomeCheckbox";
import { useSelector } from "react-redux";
import { WeakAddInput } from "../Weak-add-input/Weak-add-input";

export const WeakItem = ({ day, month, year }) => {
  const date = useSelector((state) => state.userSlice.today);
  console.log((day + "").length);
  return (
    <div className="weak__item">
      <div className="weak__header">
        {(day + "").length <= 1 ? "0" + day : day} {month} {year}{" "}
        {day == date.day ? <div className="weak__today">сегодня</div> : null}
        <DotsImg id="weak__dots" />
      </div>
      <div className="weak__elements">
        <div className="weak__element">
          <CustomeCheckbox />
          hello
        </div>
      </div>
      <WeakAddInput />
    </div>
  );
};
