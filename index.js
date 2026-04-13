import express from 'express'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import {engine, create} from 'express-handlebars'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)


const app = express()

const hbs = create({ // handlebars is too long-written, so we are creating a hbs to put like main.hbs
	defaultLayout: 'main',
	extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')


app.get('/', (req, res) => {
	res.render('index')
})

app.get('/about', (req, res) => {
	res.render('about')
})

const PORT = process.env.PORT || 4100
app.listen(PORT, () => {console.log(`Server is running on PORT: ${PORT}`)})
 