import express from 'express'
import glob from 'glob'

import instantiateReactComponent from 'react/lib/instantiateReactComponent'

function createPageServer(pageName) {
	return async (req, res, next) => {
		// try to load the controller:
		try {
			let Controller = require('./controllers/' + pageName)
			let controller = new Controller()
			controller.setContext(req, res, next)
			await controller.invoke()
		} catch (e) {
			console.error(e.stack)
			next()
		}
	}
}

let app = express()
app.set('view engine', 'vash')
app.use(express.static('./'))

glob.sync('*.js', { cwd: './assets/js/pages' })
	.map(path => path.replace(/\.js$/, '')) // remove trailing '.js'
	.forEach(path => {
		app.all('/' + path, createPageServer(path))
	})
app.all('/', (req, res) => res.redirect('/home'))//createPageServer('home'))

app.listen(7878)
console.log('listening on port 7878')
