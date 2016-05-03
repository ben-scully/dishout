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
