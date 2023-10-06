import './Day-add-input.css'

import PlusImg from '../../assets/icons/plus.svg?react'

export const DayAddInput = ({ className, functionName, value, setValue }) => {
	return (
		<div className={className ? 'day__add month__modal-add' : 'day__add'}>
			<input
				onChange={(e) => setValue(e.target.value)}
				value={value}
				className="day__input"
				type="text"
				placeholder="Добавить новую задачу"
				onKeyDown={(e) => e.key == 'Enter' && value !== '' && functionName()}
			/>

			<button onClick={() => value !== '' && functionName()} className="day__add-button">
				<PlusImg className="day__add-img " />
			</button>
		</div>
	)
}
