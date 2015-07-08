require('../css/style.less')

import React from 'react'
import ReactRouter, { Router, Route, Link } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'

window.onload = function() {
	let routes = require('./client-routes.js')
	React.render(<Router history={history}>{routes}</Router>, document.body)
}
