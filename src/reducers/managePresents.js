export function managePresents(state, action){
  state = { numberOfPresents: 0 };
  switch (action.type) {
    case "INCREASE":
      numberOfPresents: state.numberOfPresents + 1
    }
  }
  return state
}
