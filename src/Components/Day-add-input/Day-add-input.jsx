import { useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import "./Day-add-input.css";

import PlusImg from "../../assets/icons/plus.svg?react";

import { addDayTodoItem } from "../../store/slices/daySlice";

export const DayAddInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addDayTodo = () => {
    setValue("");
    const newTodo = {
      value,
      description: "",
      id: uuidv4(),
      completed: false,
      pin: false,
    };
    dispatch(addDayTodoItem(newTodo));
  };
  return (
    <div className="day__add">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="day__input"
        type="text"
        placeholder="Добавить новую задачу"
        onKeyDown={(e) =>
          e.key == "Enter" && value !== "" ? addDayTodo() : null
        }
      />
      <button
        onClick={() => (value !== "" ? addDayTodo() : null)}
        className="day__add-button"
      >
        <PlusImg className="day__add-img " />
      </button>
    </div>
  );
};
