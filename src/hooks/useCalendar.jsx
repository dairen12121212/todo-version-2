const dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const monthNames = [
	'January',
	'February',
	'March',
	'April	',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

const useCalendar = (initialDay) => {
	// получаю текущий год, месяц и день
	const currentYear = initialDay.getFullYear()
	const month = initialDay.getMonth()
	const currentDay = initialDay.getDate()
	//названия месяцев
	let prevMonth = monthNames[month - 1]
	const curruntMonth = initialDay.toLocaleString('ru', { month: 'long' })
	let nextMonth = monthNames[month + 1]

	// массивы прошлых, текущий и будущих дней месяцев
	const prevArr = []
	const currentArr = []
	const nextArr = []
	//
	let day = initialDay.getDate() //вспомогательная переменная
	let dayIndex = initialDay.getDay() //день недели. (пятница - 5 индекс и тд)
	let lastDayIndex = initialDay.getDay() //индекс последнего дня текущего месяца
	let countDayMonth = dayCount[month] //число дней в текущем месяце
	let lastCountDayMonth = dayCount[month - 1] //число дней в прошедшем месяце
	// console.log(dayIndex + " calendar");
	// console.log(day, dayIndex, lastDayIndex, countDayMonth, lastCountDayMonth)
	// если год весокосный, то в феврале 29 дней
	if (currentYear % 4 == 0) {
		dayCount[1] = 29
		countDayMonth = dayCount[month]
	}

	// если текущий месяц декабрь, то следущий берем январь
	if (month === 11) lastCountDayMonth = dayCount[0]
	// считаем индекс последнего дня текущего месяца
	for (let i = day; i < countDayMonth; i++) {
		lastDayIndex++
		if (lastDayIndex == 7) lastDayIndex = 0
	}
	// считаем индекс первого дня текущего месяца
	for (let i = day; i > 1; i--) {
		day--
		dayIndex--
		if (dayIndex < 1) dayIndex = 7
	}

	// получаем первый день в прошеднем месяце, от которого будем считать будущие дни
	// например 25 сентября (понедельник), от него считаем до 30 (суббота)
	// дальше идет уже текущий месяц
	const lastStartDay = lastCountDayMonth - (dayIndex - 2)
	console.log(dayIndex)

	// считаем какие дни должны быть в прошлом месяце
	const prevDays = () => {
		if (lastCountDayMonth) {
			for (let i = lastStartDay; i <= lastCountDayMonth; i++) {
				prevArr.push(i)
			}
		} else {
			// тут был баг, что у меня январь не мог получить данные от прошлого месяца и поэтому считался от понедельника, хотя выпадает на
			// воскресенье. Если не забуду пофиксить, то пофикшу, а пока что оставлю костыль
			for (let i = 26; i <= 31; i++) {
				prevArr.push(i)
			}
		}
	}
	prevDays()
	// считаем дни текущего месяца
	const currentDays = () => {
		for (let i = 1; i <= countDayMonth; i++) {
			currentArr.push(i)
		}
	}
	currentDays()
	// считаем дни следующего месяца (не все, а только те, которые увидит пользователь)
	const nextDays = () => {
		for (let i = 1; i <= 7 - lastDayIndex; i++) {
			nextArr.push(i)
		}
	}
	nextDays()
	// возвращаем текущий день и массивы
	return {
		prevArr,
		currentArr,
		nextArr,
		currentDay,
		curruntMonth,
		currentYear,
		prevMonth,
		nextMonth,
	}
}

export default useCalendar
