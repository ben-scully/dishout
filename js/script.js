import React from 'react'
import { render } from 'react-dom'
import EventListings from '.././components/EventListings'

const sampleEvents = [
  {
    id: 1,
    name: "Sunday Potluck",
    date: "20th April",
    time: "7pm",
    description: "potty lucky"
  },
  {
    id: 2,
    name: "Saturday Catan",
    date: "3rd may",
    time: "8pm",
    description: "cataning"
  }
]

render(
    <EventListings events={sampleEvents} />,
    document.querySelector('#myOtherHook')
  )


  // <EventListings events={sampleEvents}/>,
