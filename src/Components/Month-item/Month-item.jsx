import { useState } from 'react'
import './Month-item.css'

import { useSelector } from 'react-redux'

import { MonthModal } from '../Month-modal/Month-modal'

const nameMonthObj = {
	январь: 'objJanuaryTodo',
	февраль: 'objFebruaryTodo',
	март: 'objMarchTodo',
	апрель: 'objAprilTodo',
	май: 'objMayTodo',
	июнь: 'objJuneTodo',
	июль: 'objJulyTodo',
	август: 'objAugustTodo',
	сентябрь: 'objSeptemberTodo',
	октябрь: 'objOctoberTodo',
	ноябрь: 'objNovemberTodo',
	декабрь: 'objDecemberTodo',
}

export const MonthItem = ({ day, className, currentMonth }) => {
	const monthID = nameMonthObj[currentMonth]
	const data = useSelector((state) => state.monthSlice[monthID])
	const [modal, setModal] = useState(false)
	let total

	const onOpenModal = () => {
		setModal(true)
	}
	const onCloseModal = () => {
		setModal(false)
	}

	try {
		total = useSelector((state) => state.monthSlice[monthID][`${day}`])
	} catch (error) {}

	return (
		<>
			<div onClick={() => data && onOpenModal()} className={className}>
				<div className="month__item-header">{day}</div>
				{total !== undefined && className === 'month__item month__item_current' && (
					<div className="month__item-counter">Задач: {total.length}</div>
				)}
			</div>
			{modal && <MonthModal day={day} month={currentMonth} monthID={monthID} onCloseModal={onCloseModal} />}
		</>
	)
}
