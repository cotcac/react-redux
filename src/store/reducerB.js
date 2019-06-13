const initialState = {
    b: 21,
};
const reducer =(state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.
  // your action here
   if(action.type ==='UPDATE_B'){
    return {
      ...state,
      b: state.b + action.a
    }
  }
  // end action.
  return state;
}
export default reducer;
