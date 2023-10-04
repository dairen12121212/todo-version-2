import { useDispatch } from "react-redux";
import { useState } from "react";
import "./CustomeCheckbox.css";
import { toggleCompletedDayTodoItem } from "../../store/slices/daySlice";

export const CustomeCheckbox = ({ id }) => {
  // const [complete, setComplete] = useState(false);

  // const dispatch = useDispatch();
  // const onToggleCompletedDayTodoItem = () => {
  //   dispatch(toggleCompletedDayTodoItem(id));
  // };
  return (
    // onClick={() => onToggleCompletedDayTodoItem()}
    <label>
      <input
        // value={complete}
        // onChange={() => setComplete(!complete)}
        type="checkbox"
        className="checkbox"
      />
      <span className="custome-checkbox"></span>
    </label>
  );
};
