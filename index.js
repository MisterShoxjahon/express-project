import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { engine, create } from 'express-handlebars'
import AuthRouter from './routes/auth.route.js'
import ProductRouter from './routes/products.route.js'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

const app = express()

const hbs = create({
	defaultLayout: 'main',
	extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(AuthRouter)
app.use(ProductRouter)

const PORT = process.env.PORT || 4100
app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`)
})
