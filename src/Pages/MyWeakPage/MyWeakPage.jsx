import './MyWeakPage.css'

import WeakImg from '../../assets/icons/next-seven-day.svg?react'

import { WeakItems } from '../../Components/Weak-items/Weak-items'
import { SideBar } from '../../Components/SideBar/SideBar'

import useLogin from '../../hooks/useLogin'

export const MyWeakPage = () => {
	useLogin()
	return (
		<>
			<SideBar />
			<div className="weak">
				<div className="weak__container">
					<div className="weak__title">
						<WeakImg className="weak__img" /> Следующие 7 дней
					</div>
					<WeakItems />
				</div>
			</div>
		</>
	)
}
