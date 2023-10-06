import './Day-item.css'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import EditImg from '../../assets/icons/edit.svg?react'
import CloseImg from '../../assets/icons/close.svg?react'

import { CustomeCheckbox } from '../CustomeCheckbox/CustomeCheckbox'

export const DayItem = ({ data, deleteFunctionName }) => {
	const [completed, setCompleted] = useState(data.completed)

	return (
		<div className="day__item">
			<CustomeCheckbox id={data.id} completed={completed} setCompleted={setCompleted} />
			<div className={completed ? 'day__title day__title_completed' : 'day__title'}>{data.value}</div>
			<div className="day__buttons">
				<button className="day__button">
					<EditImg className="day__img" />
				</button>
				<button className="day__button" onClick={() => deleteFunctionName(data.id)}>
					<CloseImg className="day__img" />
				</button>
			</div>
		</div>
	)
}
