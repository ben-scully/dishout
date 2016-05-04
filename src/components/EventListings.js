import React from 'react'
import { connect } from 'react-redux'
import EventListing from './EventListing'
import EventCreate from './EventCreate'

class EventListings extends React.Component {
  render () {
    return (
      <div className="eventListings">
        <EventCreate />
        <div className="eventListingsHeaders">
          <div>Name</div>
          <div>Date</div>
          <div>Time</div>
          <div>Description</div>
        </div>
        {this.props.events.map( evt =>
          <EventListing key={evt.id} event={evt} />
        )}
      </div>
    )}}

const mapStateToProps = (state) => {
  return {
		events: state.reducers.get('events'),
    courses: state.reducers.get('courses'),
    users: state.reducers.get('users'),
    currentUser: state.reducers.get('currentUser'),
	}
}

export default connect (
	mapStateToProps,
	null
)(EventListings)

export { EventListings }
