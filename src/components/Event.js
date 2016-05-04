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
          <div>{this.props.event.desc}</div>
        </div>
        <div className="dishes">
          <div className="dish">
            <div>Course</div>
            <div>Who</div>
            <div>What</div>
          </div>
          {this.props.courses.map( course => {
            if (this.props.event.id === course.eventID)
              return <EventCourse key={course.id} course={course} />
            }
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		event: state.reducers.get("events").get("100"),
    courses: state.reducers.get("courses")
	}
}

export default connect (
	mapStateToProps,
	null
)(Event)

export { Event }
