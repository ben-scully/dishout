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
		evtList => evtList.push( newEvent )
	)
}

export function allocateDish (userAllocation) {
	return {
		type: 'ALLOCATE_DISH',
		userAllocation
	}
}

export function stateAfterAllocateDish (state, userAllocation) {
	console.log("AlloDish - before: ", state)
	console.log("AlloDish - action: ", userAllocation)
	const userID = userAllocation.userID
	const eventID = userAllocation.eventID
	const courseID = userAllocation.courseID
	let nextState = state.get('events').get(0).courses
	console.log("AlloDish - next: ", nextState)
}

// return state.updateIn(
// 	['events'],
// 	evtList => evtList.push( newEvent )
