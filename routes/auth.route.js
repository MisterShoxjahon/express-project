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

authRouter.post('/login', (req, res) => {
	console.log(req.body)
	res.redirect('/')
})

authRouter.post('/register', (req, res) => {
	console.log(req.body)
	res.redirect('/')
})

export default authRouter
