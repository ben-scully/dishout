export default function addEvent (newEvent) {
	return {
		type: 'ADD_EVENT',
		newEvent
  }
}

export function stateAfterAddEvent (state, newEvent) {
	return state.updateIn(
		['events'],
		evtList => evtList.push( newEvent )
	)
}
