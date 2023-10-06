import { useSelector } from 'react-redux'
import { DayItem } from '../Day-item/Day-item'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './Day-items.css'

export const DayItems = () => {
	const arrDayTodo = useSelector((state) => state.daySlice.arrDayTodo)
	return (
		<div className="day__items">
			{arrDayTodo.length == 0 ? (
				<div className="day__items-title">Задачи отсутсвуют</div>
			) : (
				<TransitionGroup>
					{arrDayTodo.map((item) => {
						return (
							<CSSTransition key={item.id} classNames="list-item" timeout={300}>
								<DayItem data={item} id={item.id} day={true} />
							</CSSTransition>
						)
					})}
				</TransitionGroup>
			)}
		</div>
	)
}
