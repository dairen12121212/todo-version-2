import './MyDayPage.css'

import { v4 as uuidv4 } from 'uuid'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useLogin from '../../hooks/useLogin'

import { DayItems } from '../../Components/Day-Items/Day-items'
import { DayAddInput } from '../../Components/Day-add-input/Day-add-input'
import { SideBar } from '../../Components/SideBar/SideBar'

import { addDayTodoItem } from '../../store/slices/daySlice'

export const MyDayPage = () => {
	const userName = useSelector((state) => state.userSlice.userName)
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
					<DayItems />
					<DayAddInput functionName={onAddDayTodo} value={dayItemValue} setValue={setDayItemValue} />
				</div>
			</div>
		</>
	)
}
