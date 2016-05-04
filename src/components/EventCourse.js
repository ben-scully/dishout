import React from 'react'
import { connect } from 'react-redux'
import { allocateDish } from '../actions/Actions'

class EventCourse extends React.Component {
  constructor(props) {
    super(props)
  }

  allocateDish () {
    console.log("course id: ", this.props.course.id)
    const dishAllocation = {
      userID: this.props.currentUser.id,
      eventID: this.props.course.eventID,
      courseID: this.props.course.id
    }
    this.props.allocateDish(dishAllocation)
  }

  getUserName () {
    const currUserID = this.props.course.userID
    const currUserName = this.props.users.get(currUserID.toString())
    return currUserName ? currUserName.name : "x"
  }

  render () {
    console.log("test rendering: ", this.props.course)
    return (
      <div className="dish">
        <div>{this.props.course.course}</div>
        <div>{this.getUserName()}</div>
        <button onClick={ () => this.allocateDish() }>I'll Bring This</button>
        <input type="text" value={this.props.course.what}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		currentUser: state.reducers.get("currentUser"),
    users: state.reducers.get("users")
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
	mapStateToProps,
	mapDispatchToProps
)(EventCourse)

export { EventCourse }
