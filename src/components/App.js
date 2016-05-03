import React from 'react'
import { Link } from 'react-router'
import EventListings from './EventListings'

class App extends React.Component {

	render () {
		return (
			<div className='wrapper'>
				<div className="navbar">
					<h1>DishOut Site</h1>
				</div>
				<EventListings />

				<div className='content'>
					{this.props.children}
				</div>
			</div>
		)
	}
}

App.contextTypes = {
	store: React.PropTypes.object
}

export default App
