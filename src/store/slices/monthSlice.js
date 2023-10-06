import { createSlice } from '@reduxjs/toolkit'

const monthSlice = createSlice({
	name: 'month',
	initialState: {
		objJanuaryTodo: {
			// 'first' : [
			// 	{},
			// 	{}
			// ],
			// 'second' : [
			// 	{},
			// 	{}
			// ]
		},
		objFebruaryTodo: {},
		objMarchTodo: {},
		objAprilTodo: {},
		objMayTodo: {},
		objJuneTodo: {},
		objJulyTodo: {},
		objAugustTodo: {},
		objSeptemberTodo: {},
		objOctoberTodo: {},
		objNovemberTodo: {},
		objDecemberTodo: {},
	},
	reducers: {
		addMonthDay(state, action) {
			// console.log(action.payload.monthID)
			state[action.payload.monthID][action.payload.dayID] = []
		},
		addMonthDayItem(state, action) {
			// state[action.payload.monthID][action.payload.dayId] = state[action.payload.monthID][action.payload.dayId].push(
			// 	action.payload.obj
			// )
			state[action.payload.monthID][action.payload.dayID].push(action.payload.obj)
		},
	},
})

export default monthSlice.reducer

export const { addMonthDay, addMonthDayItem } = monthSlice.actions
