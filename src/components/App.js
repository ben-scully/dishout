import React from 'react'
import { Link } from 'react-router'
import EventListings from './EventListings'
import Event from './Event'

class App extends React.Component {
	render () {
		return (
			<div className='wrapper'>
				<h1>DishOut Site</h1>
				<EventListings />
				<Event />
			</div>
		)
	}
}

App.contextTypes = {
	store: React.PropTypes.object
}

export default App
