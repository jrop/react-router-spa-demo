import React from 'react'
import { Link } from '../link.js'
import Master from '../master'

export default class About extends React.Component {
	render() {
		return <Master title="About">
			This is about <br />
			<Link to="/home">Go to Home</Link>
		</Master>
	}
}
