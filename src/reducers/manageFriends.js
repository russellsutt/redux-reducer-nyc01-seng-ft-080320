export function manageFriends(state = { friends: [] }, action){
 switch (action.type) {
    case "ADD_FRIEND":
      return ( 
        {...state, friends: [...state.friends, action.friend ] }
       )
    case "REMOVE_FRIEND":
      const index = state.friends.findIndex(friend => action.id === friend.id );
      return (
        {...state, friends: [...state.friends.splice(index, 1 )] }
        )
    default: 
      return state;
 }
};
