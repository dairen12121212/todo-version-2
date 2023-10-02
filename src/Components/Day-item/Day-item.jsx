import "./Day-item.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PinImg from "../../assets/icons/pin.svg?react";
import EditImg from "../../assets/icons/edit.svg?react";
import CloseImg from "../../assets/icons/close.svg?react";

import { CustomeCheckbox } from "../CustomeCheckbox/CustomeCheckbox";

import { removeDayTodoItem, pinDayTodoItem } from "../../store/slices/daySlice";

export const DayItem = ({ data }) => {
  const [pin, setPin] = useState(data.pin);
  const dispatch = useDispatch();

  const onDeleteDayTodo = () => {
    dispatch(removeDayTodoItem(data.id));
  };
  const onPinDayTodo = () => {
    setPin(!pin);
    dispatch(pinDayTodoItem(data.id));
  };
  return (
    <div className="day__item">
      <CustomeCheckbox />
      <div className="day__title">{data.value}</div>
      <div className={pin ? "day__buttons day__buttons_pin" : "day__buttons"}>
        <button className="day__button" onClick={() => onPinDayTodo()}>
          <PinImg className={pin ? "day__img day__img_pin" : "day__img"} />
        </button>
        <button className="day__button">
          <EditImg className="day__img" />
        </button>
        <button
          className="day__button"
          onClick={() => !pin && onDeleteDayTodo()}
        >
          <CloseImg className="day__img" />
        </button>
      </div>
    </div>
  );
};
