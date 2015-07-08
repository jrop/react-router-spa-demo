import React from 'react'
import { Link } from './link.js'
import Home from './pages/home.js'

// console.log('master.js', Link)

export default class Master extends React.Component {
	constructor(props) {
		super(props)
		this.state = { title: props.title || 'Master' }
	}

	render() {
		let content = this.props.children
		if (!content)
			content = <Home />

		return <div className="react-app">
			<header>
				<h1>{this.state.title}</h1>
				<nav>
					<ul>
						<li><Link to="home">Home</Link></li>
						<li><Link to="about">About</Link></li>
					</ul>
				</nav>
			</header>
			<main>
				{content}
			</main>
		</div>
	}
}
