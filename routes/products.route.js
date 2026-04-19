import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Boom Shop | LilBro',
	})
})

router.get('/products', (req, res) => {
	res.render('products', {
		title: 'Products | LilBro',
		isProducts: true,
	})
})

router.get('/add', (req, res) => {
	res.render('add', {
		title: 'Add Products',
		isAdd: true,
	})
})

export default router
