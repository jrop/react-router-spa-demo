import React from 'react'

export default class BaseController {
	setContext(req, res, next, pageName) {
		this.request = req
		this.response = res
		this.next = next
	}

	async invoke() {
		let method = this.request.method.toLowerCase()

		if (typeof this[method] == 'function')
			await this[method]()
		else if (typeof this.all == 'function')
			await this.all()
		else
			this.next()
	}

	react(reactElement, initialState) {
		let initialStateJson = JSON.stringify(initialState || { })
		let html = React.renderToStaticMarkup(reactElement)

		this.response.render('default', { content: html, initialStateJson: initialStateJson })
	}
}
