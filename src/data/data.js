import Immutable from 'immutable'

var sampleEvents = Immutable.List([
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
])

export default Immutable.Map({
	events: sampleEvents
})
