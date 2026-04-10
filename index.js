import express from 'express'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)


const app = express()

app.get('/', (req, res) => {
	res.status(200)
	res.sendFile(path.join(__dirName, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
	res.status(200)
	res.sendFile(path.join(__dirName, 'views', 'about.html'))
})

const PORT = process.env.PORT || 4100
app.listen(PORT, () => {console.log(`Server is running on PORT: ${PORT}`)})
 