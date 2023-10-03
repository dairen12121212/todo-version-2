import "./Weak-add-input.css";

import PlusImg from "../../assets/icons/plus.svg?react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addWeakItemTodo } from "../../store/slices/weakSlice";

import { v4 as uuidv4 } from "uuid";

export const WeakAddInput = ({ keyProp }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const addWeakItem = () => {
    const item = {
      value,
      description: "",
      id: uuidv4(),
      completed: false,
      pin: false,
    };
    dispatch(addWeakItemTodo({ keyProp, item }));
    setValue("");
  };
  return (
    <div className="weak__add">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="weak__input"
        placeholder="Добавить новую задачу"
        onKeyDown={(e) =>
          e.key == "Enter" && value !== "" ? addWeakItem() : null
        }
      />
      <button
        className="weak__button"
        onClick={() => (value != "" ? addWeakItem() : null)}
      >
        <PlusImg id="weak__plus" />
      </button>
    </div>
  );
};
