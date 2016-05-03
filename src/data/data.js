import Immutable from 'immutable'

const courses1 = Immutable.List([
  {course: "starter", who: "Kieu", whoID: 100, what: "Paua"},
  {course: "main"},
  {course: "desert", who: "Sammie", whoID: 101, what: "Chocolate"}
])

const courses2 = Immutable.List([
  {course: "starter"},
  {course: "main", who: "Pete", whoID: 100, what: "Roast Chicken"},
  {course: "desert"}
])

const sampleEvents = Immutable.List([
  {
    id: 1,
    name: "Sunday Potluck",
    date: "20th April",
    time: "7pm",
    description: "potty lucky",
    courses: courses1
  },
  {
    id: 2,
    name: "Saturday Catan",
    date: "3rd may",
    time: "8pm",
    description: "cataning",
    courses: courses2
  }
])

export default Immutable.Map({
	events: sampleEvents
})
