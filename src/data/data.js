import Immutable from 'immutable'

const users = Immutable.Map({
  300: {id: 300, name: "Picasso"},
  301: {id: 301, name: "Leonardo"},
  302: {id: 302, name: "Donatello"}
})

const courses = Immutable.Map({
  200: {id: 200, eventID: 100, course: "Starter", userID: 0, what: ""},
  201: {id: 201, eventID: 100, course: "Main", userID: 301, what: ""},
  202: {id: 202, eventID: 100, course: "Desert", userID: 0, what: "Chocolate"},
  203: {id: 203, eventID: 200, course: "Starter", userID: 0, what: ""},
  204: {id: 204, eventID: 200, course: "Main", userID: 300, what: "Roast Chicken"},
  205: {id: 205, eventID: 200, course:"Desert", userID: 0, what: ""}
})

const events = Immutable.Map({
  100: {
    id: 100,
    name: "Sunday Potluck",
    date: "20th April",
    time: "7pm",
    desc: "potty lucky"
  },
  101: {
    id: 101,
    name: "Saturday Catan",
    date: "3rd may",
    time: "8pm",
    desc: "cataning"
  }
})

export default Immutable.Map({
	events: events,
  courses: courses,
  currentUser: users.get("300"),
  users: users
})
