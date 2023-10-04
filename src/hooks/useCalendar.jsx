const dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const useCalendar = (initialDay) => {
  const year = initialDay.getFullYear();
  const month = initialDay.getMonth();
  const currentDay = initialDay.getDate();
  //
  const prevArr = [];
  const currentArr = [];
  const nextArr = [];
  //
  let day = initialDay.getDate();
  let dayIndex = initialDay.getDay();
  let lastDayIndex = initialDay.getDay();
  let countDayMonth = dayCount[month];
  let lastCountDayMonth = dayCount[month - 1];

  if (year % 4 == 0) {
    dayCount[1] = 29;
    countDayMonth = dayCount[month];
  }

  if (month === 12) lastCountDayMonth = dayCount[0];

  for (let i = day; i < countDayMonth; i++) {
    lastDayIndex++;
    if (lastDayIndex == 7) lastDayIndex = 0;
  }

  for (let i = day; i > 1; i--) {
    day--;
    dayIndex--;
    if (dayIndex < 1) dayIndex = 7;
  }

  const lastStartDay = lastCountDayMonth - (dayIndex - 2);

  const prevDays = () => {
    for (let i = lastStartDay; i <= lastCountDayMonth; i++) {
      prevArr.push(i);
    }
  };
  prevDays();

  const currentDays = () => {
    for (let i = 1; i <= countDayMonth; i++) {
      currentArr.push(i);
    }
  };

  currentDays();
  const nextDays = () => {
    for (let i = 1; i <= 7 - lastDayIndex; i++) {
      nextArr.push(i);
    }
  };
  nextDays();

  return { prevArr, currentArr, nextArr, currentDay };
};

export default useCalendar;
