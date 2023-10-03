import "./Weak-element.css";

import { CustomeCheckbox } from "../../Components/CustomeCheckbox/CustomeCheckbox";

import EditImg from "../../assets/icons/edit.svg?react";
import CloseImg from "../../assets/icons/close.svg?react";
import { useDispatch } from "react-redux";

import { removeWeakItemTodo } from "../../store/slices/weakSlice";

export const WeakElement = ({ data, keyProp }) => {
  const dispatch = useDispatch();
  const onDeleteWeakItem = () => {
    dispatch(removeWeakItemTodo({ id: data.id, objId: keyProp }));
  };
  return (
    <div className="weak__element">
      <CustomeCheckbox />
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
