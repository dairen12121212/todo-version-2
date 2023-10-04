import "./MyDayPage.css";

import { DayItems } from "../../Components/Day-Items/Day-items";
import { DayAddInput } from "../../Components/Day-add-input/Day-add-input";
import { SideBar } from "../../Components/SideBar/SideBar";

import useLogin from "../../hooks/useLogin";
import { useSelector } from "react-redux";

export const MyDayPage = () => {
  const userName = useSelector((state) => state.userSlice.userName);
  useLogin();
  return (
    <>
      <SideBar />
      <div className="day">
        <div className="day__container">
          <div className="day__hello">
            <div>Доброго Времени Суток, {userName}!</div>
          </div>
          <div className="day__time">
            <div className="day__info">
              {new Date().toLocaleString("ru", { weekday: "short" })}
            </div>
            <div className="day__date">{new Date().getDate()}</div>
            <div className="day__month">
              {new Date().toLocaleString("ru", { month: "long" })}
            </div>
          </div>
          <DayItems />
          <DayAddInput />
        </div>
      </div>
    </>
  );
};
