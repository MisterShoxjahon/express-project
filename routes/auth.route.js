import { Router } from 'express'

const authRouter = Router()

authRouter.get('/login', (req, res) => {
	res.render('login', {
		title: 'Login | LilBro',
		isRegister: true,
	})
})

authRouter.get('/register', (req, res) => {
	res.render('register', {
		title: 'Register | LilBro',
		isLogin: true,
	})
})

export default authRouter
