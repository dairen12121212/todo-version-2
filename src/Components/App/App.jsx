import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'

// components
import { Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

// pages
import { HomePage } from '../../Pages/HomePage/HomePage'
import { MyDayPage } from '../../Pages/MyDayPage/MyDayPage'
import { MyWeakPage } from '../../Pages/MyWeakPage/MyWeakPage'
import { MyMonthPage } from '../../Pages/MyMonthPage/MyMonthPage'
import { NotFoundPage } from '../../Pages/NotFoundPage/NotFoundPage'
import { LoginPage } from '../../Pages/LoginPage/LoginPage'
import { RegistrationPage } from '../../Pages/RegistrationPage/RegistrationPage'

// actions
import { addFirstAppearance } from '../../store/slices/userSlice'

function App() {
	const dispatch = useDispatch()

	const firstAppearance = useSelector((state) => state.userSlice.firstAppearance)
	useEffect(() => {
		if (!firstAppearance) {
			const date = new Date()

			const year = date.getFullYear()
			const month = date.getMonth()
			const day = date.getDate()
			const hours = date.getHours()
			const minutes = date.getMinutes()

			dispatch(addFirstAppearance({ year, month, day, hours, minutes }))
		}
	}, [])

	return (
		<>
			<div className="app">
				<HashRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/my-day" element={<MyDayPage />} />
						<Route path="/my-weak" element={<MyWeakPage />} />
						<Route path="/my-month" element={<MyMonthPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/registration" element={<RegistrationPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</HashRouter>
			</div>
		</>
	)
}

export default App
