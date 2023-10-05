import './LoginPage.css'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { userLogin } from '../../store/slices/userSlice'

export const LoginPage = () => {
	const { userName, userSurname, userPassword, login } = useSelector((state) => state.userSlice)

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (login) {
			navigate('/my-day')
		}
	}, [login, navigate])

	const onLogin = (e) => {
		e.preventDefault()
		if (name == userName && surname == userSurname && password === userPassword) {
			dispatch(userLogin())
			navigate('/my-day')
		} else {
			setError(true)
		}
	}

	return (
		<div className="login">
			<div className="login__container">
				<div className="login__header">Вход</div>

				<form className="login__form" action="#">
					<input
						className={error ? 'login__input login__input_err' : 'login__input'}
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						required
						placeholder="Имя"
					/>
					<input
						className={error ? 'login__input login__input_err' : 'login__input'}
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						type="text"
						required
						placeholder="Фамилия"
					/>
					<input
						className={error ? 'login__input login__input_err' : 'login__input'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="current-password"
						required
						placeholder="Пароль"
					/>
					{error && <div className="login__err">Неверные данные</div>}
					<button onClick={(e) => onLogin(e)} className="login__button">
						Войти
					</button>
				</form>

				<div className="login__footer">
					<div className="login__subtitle">Нет аккаунта?</div>
					<NavLink to="/registration" className="login__link">
						Зарегестрироваться!
					</NavLink>
				</div>
			</div>
		</div>
	)
}
