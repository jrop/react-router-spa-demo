import React from 'react'
import { Link } from '../link.js'
import Master from '../master'

export default class Home extends React.Component {
	render() {
		return <Master title="Home">
			This is home <br />
			<Link to="/about">Go to About</Link>
		</Master>
	}
}
