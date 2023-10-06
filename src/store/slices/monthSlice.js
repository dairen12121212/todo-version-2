import { createSlice } from '@reduxjs/toolkit'

const monthSlice = createSlice({
	name: 'month',
	initialState: {
		objJanuaryTodo: {},
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
			state[action.payload.monthID][action.payload.dayID] = []
		},
		addMonthDayItem(state, action) {
			state[action.payload.monthID][action.payload.dayID].push(action.payload.obj)
			console.log(action.payload.obj)
		},
		removeMonthItem(state, action) {
			state[action.payload.monthID][action.payload.dayID] = state[action.payload.monthID][action.payload.dayID].filter((item) => {
				return item.id != action.payload.id
			})
		},
	},
})

export default monthSlice.reducer

export const { addMonthDay, addMonthDayItem, removeMonthItem } = monthSlice.actions
