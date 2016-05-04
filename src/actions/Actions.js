import Immutable from 'immutable'

export default function addEvent (newEvent) {
	return {
		type: 'ADD_EVENT',
		newEvent
  }
}

export function stateAfterAddEvent (state, newEvent) {
	let nextID = 1 + state.get('events').size
	newEvent.id = nextID
	return state.updateIn(
		['events'],
		evtMap => evtMap.set( nextID, newEvent )
	)
}

export function allocateDish (userAllocation) {
	return {
		type: 'ALLOCATE_DISH',
		userAllocation
	}
}

export function stateAfterAllocateDish (state, userAllocation) {
	const userID = userAllocation.userID
	const eventID = userAllocation.eventID
	const courseID = userAllocation.courseID
	const changedState = state.updateIn(
		['courses', courseID.toString()],
		x => {x.course = "sam"
					return x})
	console.log( Immutable.is(state, changedState) )
	console.log("compare: ", state.get('courses').get("200"), changedState.get('courses').get("200"))
	return {}
}



// const changedState = state.updateIn(
// 	['courses', courseID.toString()],
// 	x => {x.course = "sam"
// 				return x})
