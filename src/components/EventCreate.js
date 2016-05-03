import React from 'react'
import { connect } from 'react-redux'
import addEvent from '../actions/Actions'

class EventCreate extends React.Component {

  addEvent () {
    let newEvent = {
      name: this.refs.name.value,
      date: this.refs.date.value,
      time: this.refs.time.value,
      description: this.refs.description.value
    }
    this.props.addEvent(newEvent)
  }

  render () {
    return (
      <div className="eventCreate">
        <label htmlFor="name">Enter event name:</label>
        <input ref="name" type="text" id="name" />
        <label htmlFor="date">Enter event date:</label>
        <input ref="date" type="text" id="date" />
        <label htmlFor="time">Enter event time:</label>
        <input ref="time" type="text" id="time" />
        <label htmlFor="description">Enter event description:</label>
        <input ref="description" type="text" id="description" />
        <button onClick={() => this.addEvent()}>Create Event</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		addEvent: (newEvent) => {
			dispatch(addEvent(newEvent))
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(EventCreate)

export { EventCreate }
