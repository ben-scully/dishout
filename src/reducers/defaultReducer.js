import initialState from '../data/data'
import { stateAfterAddEvent } from '../actions/Actions'

export default function defaultReducer (state = initialState, action) {
  switch (action.type) {

    case 'ADD_EVENT':
      return stateAfterAddEvent(state, action.newEvent)

    default:
      return state;
  }
}
