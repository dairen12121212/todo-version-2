import "./Weak-add-input.css";

import PlusImg from "../../assets/icons/plus.svg?react";

export const WeakAddInput = () => {
  return (
    <div className="weak__add">
      <input
        type="text"
        className="weak__input"
        placeholder="Добавить новую задачу"
      />
      <button className="weak__button">
        <PlusImg id="weak__plus" />
      </button>
    </div>
  );
};
