import { useDispatch } from "react-redux";
import "./CustomeCheckbox.css";
import { toggleCompletedDayTodoItem } from "../../store/slices/daySlice";
import { toggleWeakItemCompleted } from "../../store/slices/weakSlice";

export const CustomeCheckbox = ({ id, completed, setCompleted, objId }) => {
  const dispatch = useDispatch();

  const onToggleCompletedDayTodoItem = () => {
    dispatch(toggleCompletedDayTodoItem(id));
  };
  const onToggleCompletedWeakTodoItem = () => {
    dispatch(toggleWeakItemCompleted({ id, objId }));
  };
  return (
    <label>
      <input
        onClick={() =>
          objId
            ? onToggleCompletedWeakTodoItem()
            : onToggleCompletedDayTodoItem()
        }
        value={completed}
        onChange={() => setCompleted(!completed)}
        type="checkbox"
        className="checkbox"
      />
      <span className="custome-checkbox"></span>
    </label>
  );
};
