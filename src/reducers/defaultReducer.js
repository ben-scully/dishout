import initialState from '../data/data'
import { stateAfterAddEvent, stateAfterAllocateDish } from '../actions/Actions'

export default function defaultReducer (state = initialState, action) {
  switch (action.type) {

    case 'ADD_EVENT':
      return stateAfterAddEvent(state, action.newEvent)

    case 'ALLOCATE_DISH':
      return stateAfterAllocateDish(state, action.userAllocation)

    default:
      return state;
  }
}
