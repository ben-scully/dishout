import React from 'react'

class Event extends React.Component {
  constructor (props) {
    super(props)
  }

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
            <div>Meal</div>
            <div>Person</div>
            <div>Choice</div>
          </div>
          <div className="dish">
            <div>Starters</div>
            <div>Kieu</div>
            <div>Cheese & Crackers</div>
          </div>
          <div className="dish">
            <div>Main</div>
            <div>Ross</div>
            <div>Spaghetti</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Event
