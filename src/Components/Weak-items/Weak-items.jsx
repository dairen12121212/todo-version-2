import { useEffect } from 'react'
import { WeakItem } from '../Weak-item/Weak-item'
import './Weak-items.css'
import { useDispatch, useSelector } from 'react-redux'

import { addToday } from '../../store/slices/userSlice'
import { WeakAddDay } from '../Weak-add-day/Weak-add-day'

export const WeakItems = () => {
	const dispatch = useDispatch()
	const objWeakTodo = useSelector((state) => state.weakSlice.objWeakTodo)
	const today = useSelector((state) => state.userSlice.today) || {}

	let length = Object.keys(objWeakTodo).length

	useEffect(() => {
		const day = new Date().getDate()
		const month = new Date().toLocaleString('ru', { month: 'short' })
		const year = new Date().getFullYear()
		dispatch(
			addToday({
				day,
				month,
				year,
			})
		)
		//! двойной рендер происходит
	}, [])

	return (
		<div className="weak__items">
			{Object.keys(objWeakTodo).map((key, i) => (
				<WeakItem key={key} keyProp={key} day={today.day + i + 1} month={today.month} year={today.year} />
			))}
			{length < 7 ? <WeakAddDay /> : null}
		</div>
	)
}
