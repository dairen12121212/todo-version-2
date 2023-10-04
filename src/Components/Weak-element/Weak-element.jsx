import { useState } from "react";

import "./Weak-element.css";

import { CustomeCheckbox } from "../../Components/CustomeCheckbox/CustomeCheckbox";

import EditImg from "../../assets/icons/edit.svg?react";
import CloseImg from "../../assets/icons/close.svg?react";
import { useDispatch } from "react-redux";

import { removeWeakItemTodo } from "../../store/slices/weakSlice";

export const WeakElement = ({ data, keyProp }) => {
  const [completed, setCompleted] = useState(data.completed);
  const dispatch = useDispatch();

  const onDeleteWeakItem = () => {
    dispatch(removeWeakItemTodo({ id: data.id, objId: keyProp }));
  };
  // console.log(data);
  return (
    <div
      className={
        completed ? "weak__element weak__element_completed" : "weak__element"
      }
    >
      <CustomeCheckbox
        id={data.id}
        completed={completed}
        setCompleted={setCompleted}
        objId={keyProp}
      />
      {data.value}
      <div className="weak__buttons">
        <button className="day__button">
          <EditImg className="day__img" />
        </button>
        <button className="day__button" onClick={() => onDeleteWeakItem()}>
          <CloseImg className="day__img" />
        </button>
      </div>
    </div>
  );
};
