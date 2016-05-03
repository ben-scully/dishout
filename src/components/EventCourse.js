import React from 'react'
import { connect } from 'react-redux'
import { allocateDish } from '../actions/Actions'

class EventCourse extends React.Component {
  constructor(props) {
    super(props)
  }

  allocateDish () {
    let dishAllocation = {
      userID: 100,
      eventID: 1,
      courseID: 1
    }
    this.props.allocateDish(dishAllocation)
  }

  render () {
    return (
      <div className="dish">
        <div>{this.props.course.course}</div>
        <div>{this.props.course.who}</div>
        <button onClick={ () => this.allocateDish() }>I'll Bring This</button>
        <input type="text" value={this.props.course.what}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		allocateDish: (dishAllocation) => {
			dispatch(allocateDish(dishAllocation))
		}
	}
}

export default connect (
	null,
	mapDispatchToProps
)(EventCourse)

export { EventCourse }
