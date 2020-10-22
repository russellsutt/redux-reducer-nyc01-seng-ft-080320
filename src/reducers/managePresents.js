export function managePresents(state = { numberOfPresents: 0 }, action){
  switch (action.type) {
    case "INCREASE":
      numberOfPresents: state.numberOfPresents + 1
      break;
    default:
      Object.assign({}, state
  }
  return state
}
