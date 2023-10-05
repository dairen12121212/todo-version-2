import './Month-item.css'

export const MonthItem = ({ day, className }) => {
	return (
		<div className={className}>
			<div className="month__item-header">{day}</div>
			{day % 5 === 0 && <div className="month__item-counter">Запланировано: 10 задач</div>}
		</div>
	)
}
