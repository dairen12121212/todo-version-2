import "./MyMonthPage.css";
import MonthImg from "../../assets/icons/month.svg?react";

import { SideBar } from "../../Components/SideBar/SideBar";
import useCalendar from "../../hooks/useCalendar";

export const MyMonthPage = () => {
  const initialDay = new Date();

  const { prevArr, currentArr, nextArr, currentDay } = useCalendar(initialDay);

  return (
    <>
      <SideBar />
      <div className="month">
        <div className="month__title">
          <MonthImg className="month__img" /> Задачи на месяц
        </div>
        <div className="month__container">
          <div className="month__items">
            {prevArr.map((item, i) => {
              return (
                <div className="month__item" key={i}>
                  <div className="month__subtitle">{item}</div>
                </div>
              );
            })}
            {currentArr.map((item, i) => {
              return (
                <div
                  id={i + 1 === currentDay && "day"}
                  className="month__item month__item_current"
                  key={i}
                >
                  <div className="month__subtitle">{item}</div>
                </div>
              );
            })}
            {nextArr.map((item, i) => {
              return (
                <div className="month__item" key={i}>
                  <div className="month__subtitle">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
