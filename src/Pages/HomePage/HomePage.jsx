import { SideBar } from '../../Components/SideBar/SideBar'
import useLogin from '../../hooks/useLogin'
import './HomePage.css'

export const HomePage = () => {
	useLogin()
	return (
		<>
			<SideBar />
			<div className="home"></div>
		</>
	)
}
