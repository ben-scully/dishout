import React from 'react'
import { connect } from 'react-redux'
import EventCourse from './EventCourse'

class Event extends React.Component {
  render () {
    return (
      <div className="event">
        <div className="eventInfo">
          <div>{this.props.event.name}</div>
          <div>{this.props.event.date}</div>
          <div>{this.props.event.time}</div>
          <div>{this.props.event.description}</div>
        </div>
        <div className="dishes">
          <div className="dish">
            <div>Course</div>
            <div>Who</div>
            <div>What</div>
          </div>
          <EventCourse course={this.props.courses.get(0)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		event: state.reducers.get("events").get(0),
    courses: state.reducers.get("events").get(0).courses
	}
}

export default connect (
	mapStateToProps,
	null
)(Event)

export { Event }
