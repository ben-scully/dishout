import initialState from '../data/data'
import { stateAfterAddEvent, stateAfterAllocateDish } from '../actions/Actions'
import Immutable from 'immutable'

export default function defaultReducer (state = initialState, action) {
  switch (action.type) {

    case 'ADD_EVENT':
      return stateAfterAddEvent(state, action.newEvent)

    case 'ALLOCATE_DISH':
      console.log("-- defaultReducer DISH: called")
      const changedState = stateAfterAllocateDish(state, action.userAllocation)
      console.log( Immutable.is(changedState, state), changedState)
      return changedState

    default:
      return state;
  }
}
