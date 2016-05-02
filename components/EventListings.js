import React from 'react'
import EventListing from './EventListing'
import EventCreate from './EventCreate'

class EventListings extends React.Component {
  constructor (props) {
    super(props)
  }

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
    )
  }
}

export default EventListings
