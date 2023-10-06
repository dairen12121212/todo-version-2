import './MyDayPage.css'

import { v4 as uuidv4 } from 'uuid'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useLogin from '../../hooks/useLogin'

import { DayAddInput } from '../../Components/Day-add-input/Day-add-input'
import { DayItem } from '../../Components/Day-item/Day-item'
import { SideBar } from '../../Components/SideBar/SideBar'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { addDayTodoItem, removeDayTodoItem } from '../../store/slices/daySlice'

export const MyDayPage = () => {
	const userName = useSelector((state) => state.userSlice.userName)
	const arrDayTodo = useSelector((state) => state.daySlice.arrDayTodo)
	const dispatch = useDispatch()
	const [dayItemValue, setDayItemValue] = useState('')

	useLogin()
	const onAddDayTodo = () => {
		setDayItemValue('')
		const Obj = {
			value: dayItemValue,
			description: '',
			completed: false,
			pin: false,
			id: uuidv4(),
		}
		dispatch(addDayTodoItem(Obj))
	}

	const onDeleteDayTodo = (id) => {
		dispatch(removeDayTodoItem(id))
	}

	return (
		<>
			<SideBar />
			<div className="day">
				<div className="day__container">
					<div className="day__hello">
						<div>Доброго Времени Суток, {userName}!</div>
					</div>
					<div className="day__time">
						<div className="day__info">{new Date().toLocaleString('ru', { weekday: 'short' })}</div>
						<div className="day__date">{new Date().getDate()}</div>
						<div className="day__month">{new Date().toLocaleString('ru', { month: 'long' })}</div>
					</div>
					<div className="day__items">
						{arrDayTodo.length == 0 ? (
							<div className="day__items-title">Задачи отсутсвуют</div>
						) : (
							<TransitionGroup>
								{arrDayTodo.map((item) => {
									return (
										<CSSTransition key={item.id} classNames="list-item" timeout={300}>
											<DayItem data={item} id={item.id} day={true} deleteFunctionName={onDeleteDayTodo} />
										</CSSTransition>
									)
								})}
							</TransitionGroup>
						)}
					</div>
					<DayAddInput functionName={onAddDayTodo} value={dayItemValue} setValue={setDayItemValue} />
				</div>
			</div>
		</>
	)
}
