import { useState } from "react";
import { WeakItem } from "../Weak-item/Weak-item";
import "./Weak-items.css";
import { useDispatch, useSelector } from "react-redux";

import { addToday } from "../../store/slices/userSlice";

export const WeakItems = () => {
  const dispatch = useDispatch();
  const arrWeakTodo = useSelector((state) => state.weakSlice.arrWeakTodo);
  const today = useSelector((state) => state.userSlice.today);
  useState(() => {
    const day = new Date().getDate();
    const month = new Date().toLocaleString("ru", { month: "short" });
    const year = new Date().getFullYear();
    dispatch(
      addToday({
        day,
        month,
        year,
      })
    );
  }, []);
  return (
    <div className="weak__items">
      {arrWeakTodo.length > 0
        ? arrWeakTodo.map((item, i) => {
            return (
              <WeakItem
                key={i}
                data={item}
                day={today.day + i}
                month={today.month}
                year={today.year}
              />
            );
          })
        : null}
    </div>
  );
};
