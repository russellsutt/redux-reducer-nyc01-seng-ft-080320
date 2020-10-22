export function manageFriends(state = { friends: [] }, action){
 switch (action.type) {
    case "ADD_FRIEND":
      return ( 
        {...state,
          friends: [
            ...state.friends,
            action.friend
            ]
          }
        )
    case "REMOVE_FRIEND":
      const index = state.friends.index
      return (
        {...state, friends: [...state.friends.slice(0, )]
        )
      
    default: 
      return state;
 }
}
