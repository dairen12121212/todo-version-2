import { NavLink } from 'react-router-dom'

import MyDayImg from '../../assets/icons/day.svg?react'
import MyWeakImg from '../../assets/icons/next-seven-day.svg?react'
import MyMonthImg from '../../assets/icons/month.svg?react'
import NotImg from '../../assets/icons/not.svg?react'
import AllImg from '../../assets/icons/all.svg?react'

import './NavMenu.css'

export const NavMenu = () => {
	return (
		<nav className="nav">
			<div className="nav__title">Personal</div>
			<div className="nav__container">
				<NavLink to="/my-day" className="nav__link">
					<MyDayImg className="nav__img" />
					Мой День
				</NavLink>
				<NavLink to="/my-weak" className="nav__link">
					<MyWeakImg className="nav__img" />
					Моя Неделя
				</NavLink>
				<NavLink to="/my-month" className="nav__link">
					<MyMonthImg className="nav__img" />
					Мой Месяц
				</NavLink>
				<NavLink to="/all-my-tasks" className="nav__link">
					<AllImg className="nav__img" />
					Все задачи
				</NavLink>
				<NavLink to="/not-completed" className="nav__link">
					<NotImg className="nav__img" />
					Незавершенные Задачи
				</NavLink>
			</div>
		</nav>
	)
}
