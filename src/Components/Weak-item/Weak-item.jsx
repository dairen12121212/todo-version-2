import './Weak-item.css'

import DotsImg from '../../assets/icons/dots.svg?react'

import { useSelector } from 'react-redux'
import { WeakAddInput } from '../Weak-add-input/Weak-add-input'

import { WeakElement } from '../Weak-element/Weak-element'

export const WeakItem = ({ keyProp, day, month, year }) => {
	const data = useSelector((state) => state.weakSlice.objWeakTodo[keyProp])

	return (
		<div className="weak__item" style={{ height: 155 + 45 * data.length + 'px' }}>
			<div className="weak__header">
				{(day + '').length <= 1 ? '0' + day : day} {month} {year}
				{day - 1 == new Date().getDate() ? <div className="weak__today">Завтра</div> : null}
				<DotsImg id="weak__dots" />
			</div>
			<div className="weak__elements">
				{data.length === 0 && <div className="weak__elements-title">заметок нет</div>}
				{data !== undefined &&
					data.map((item, i) => {
						return <WeakElement data={item} key={item.id} keyProp={keyProp} />
					})}
			</div>
			<WeakAddInput keyProp={keyProp} />
		</div>
	)
}
