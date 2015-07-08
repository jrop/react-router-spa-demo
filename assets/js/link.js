import React from 'react'
import { Link } from 'react-router'

let _Link = Link
class _ShimLink extends React.Component {
	render() {
		return <a href={this.props.to}>{this.props.children}</a>
	}
}

try {
	// fails in node.js
	let b = document.body
} catch (e) {
	_Link = _ShimLink
}

module.exports = _Link
module.exports.Link = _Link
