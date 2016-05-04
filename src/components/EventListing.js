import React from 'react'

class EventListing extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="eventListing">
        <div>{this.props.event.name}</div>
        <div>{this.props.event.date}</div>
        <div>{this.props.event.time}</div>
        <div>{this.props.event.desc}</div>
      </div>
    )
  }
}

export default EventListing
