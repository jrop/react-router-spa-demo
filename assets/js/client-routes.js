/**
 * This file is NOT included by the server
 * It generates the router based on the files available in the directory './pages',
 * and generates this at build-time by the use of require.context (see webpack documentation).
 * This function makes files available at runtime (on the client-side), based on what webpack saw
 * at build-time (a pretty cool function).
 */

import React from 'react'
import { Route } from 'react-router'

class EmptyComponent extends React.Component {
	render() {
		return this.props.children
	}
}

let pages = { }
let dir = require.context('./pages', true)
let routes = dir.keys()
	.filter(key => !key.endsWith('.js')) // filter out only the paths like './about' && './home' (not './about.js')
	.map((key, i) => <Route path={key.replace('./', '')} component={dir(key)} key={i} />) // make a route with the path like 'about' (not './about'), and include the module for the route's component

module.exports = <Route path="/" component={EmptyComponent}>{routes}</Route>
