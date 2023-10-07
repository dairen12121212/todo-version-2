import './Month-modal.css'

import CloseImg from '../../assets/icons/close.svg?react'

import { v4 as uuidv4 } from 'uuid'

import { DayItem } from '../Day-item/Day-item'
import { DayAddInput } from '../Day-add-input/Day-add-input'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addMonthDay, addMonthDayItem, removeMonthItem } from '../../store/slices/monthSlice'

export const MonthModal = ({ day, month, onCloseModal, monthID }) => {
	const monthDayData = useSelector((state) => state.monthSlice[monthID][day]) || []
	const [monthItemValue, setMonthItemValue] = useState('')
	const dispatch = useDispatch()

	const onAddMonthItem = () => {
		setMonthItemValue('')
		const obj = {
			value: monthItemValue,
			description: '',
			id: uuidv4(),
			completed: false,
		}
		if (monthDayData.length === 0 || monthDayData === false) {
			dispatch(addMonthDay({ monthID, dayID: day }))
		}
		dispatch(addMonthDayItem({ dayID: day, monthID, obj }))
	}

	const onDeleteMonthItem = (id) => {
		dispatch(removeMonthItem({ id, dayID: day, monthID }))
	}
	return (
		<div className="month__modal">
			<div className="month__modal-content">
				<div className="month__modal-header">
					<div className="month__modal-date">{`${month} ${day}`}</div>
					<div onClick={() => onCloseModal()} className="month__modal-close">
						<CloseImg className="month__modal-img" />
					</div>
				</div>
				<div className="month__modal-wrapper">
					<div className="month__modal-items">
						{monthDayData == undefined || (monthDayData.length == 0 && <div className="month__modal-none">Задач нет</div>)}
						{monthDayData.map((item, i) => {
							return <DayItem data={item} key={i} deleteFunctionName={onDeleteMonthItem} />
						})}
					</div>
					<DayAddInput
						className="month__modal-add"
						functionName={onAddMonthItem}
						value={monthItemValue}
						setValue={setMonthItemValue}
					/>
				</div>
			</div>
		</div>
	)
}
