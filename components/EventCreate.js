import React from 'react'

class EventCreate extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="eventCreate">
        <form>
          <label htmlFor="name">Enter event name: </label>
          <input type="text" id="name" />
          <label htmlFor="date">Enter event date: </label>
          <input type="text" id="date" />
          <label htmlFor="time">Enter event time: </label>
          <input type="text" id="time" />
          <label htmlFor="description">Enter event description: </label>
          <input type="text" id="description" />
        </form>
      </div>
    )
  }
}

export default EventCreate
