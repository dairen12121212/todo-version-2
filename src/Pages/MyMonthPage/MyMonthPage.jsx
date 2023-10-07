import useCalendar from '../../hooks/useCalendar'

import './MyMonthPage.css'
import MonthImg from '../../assets/icons/month.svg?react'

import { MonthItem } from '../../Components/Month-item/Month-item'

import { SideBar } from '../../Components/SideBar/SideBar'
import { useState } from 'react'

export const MyMonthPage = () => {
	const [initialDay, setInitialDay] = useState(new Date())

	const { prevArr, currentArr, nextArr, currentDay, curruntMonth, prevMonth, nextMonth, currentYear } = useCalendar(initialDay)

	return (
		<>
			<SideBar />
			<div className="month">
				<div className="month__header">
					<div className="month__title">
						<MonthImg className="month__img" /> Задачи на месяц
					</div>
					<div className="month__nav">
						<button
							onClick={() => curruntMonth !== 'январь' && setInitialDay(new Date(`${prevMonth} ${currentDay}, ${currentYear}`))}
							className="month__button">
							Прошлый
						</button>
						<div className="month__current-month">{curruntMonth}</div>
						<button
							onClick={() => curruntMonth !== 'декабрь' && setInitialDay(new Date(`${nextMonth} ${currentDay}, ${currentYear}`))}
							className="month__button">
							Следущий
						</button>
					</div>
				</div>
				<div className="month__container">
					<div className="month__days">
						<div className="month__day">понедельник</div>
						<div className="month__day">вторник</div>
						<div className="month__day">среда</div>
						<div className="month__day">четверг</div>
						<div className="month__day">пятница</div>
						<div className="month__day">суббота</div>
						<div className="month__day">воскресенье</div>
					</div>
					<div className="month__items">
						{prevArr.map((item, i) => {
							return <MonthItem key={i} day={item} className={'month__item'} />
						})}
						{currentArr.map((item, i) => {
							return (
								<MonthItem
									currentMonth={curruntMonth}
									key={i}
									day={item}
									className={
										i + 1 === currentDay && curruntMonth === new Date().toLocaleString('ru', { month: 'long' })
											? 'month__item month__item_current month__item_current-day'
											: 'month__item month__item_current'
									}
								/>
							)
						})}
						{nextArr.map((item, i) => {
							return <MonthItem key={i} day={item} className={'month__item'} />
						})}
					</div>
				</div>
			</div>
		</>
	)
}
