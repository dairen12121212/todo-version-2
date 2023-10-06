import { useState } from 'react'
import './Month-item.css'

import { useSelector, useDispatch } from 'react-redux'

import { MonthModal } from '../Month-modal/Month-modal'

const nameMonthObj = {
	январь: 'objJanuaryTodo',
	ферваль: 'objFebruaryTodo',
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

	const onOpenModal = () => {
		setModal(true)
	}
	const onCloseModal = () => {
		setModal(false)
	}

	return (
		<>
			<div onClick={() => data && onOpenModal()} className={className}>
				<div className="month__item-header">{day}</div>
				{/* {day % 5 === 0 && <div className="month__item-counter">Запланировано: 10 задач</div>} */}
			</div>
			{modal && <MonthModal day={day} month={currentMonth} monthID={monthID} onCloseModal={onCloseModal} />}
		</>
	)
}
