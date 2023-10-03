import "./Weak-add-day.css";
import { v4 as uuidv4 } from "uuid";

import PlusImg from "../../assets/icons/plus.svg?react";
import { useDispatch, useSelector } from "react-redux";

import { addWeakDay } from "../../store/slices/weakSlice";

export const WeakAddDay = () => {
  const dispatch = useDispatch();
  const onAddWeakDay = () => {
    dispatch(addWeakDay(uuidv4()));
  };
  return (
    <div className="weak-add-day" onClick={() => onAddWeakDay()}>
      <div>Добавить день недели</div>
      <PlusImg className="weak__img" />
    </div>
  );
};
