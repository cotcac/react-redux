const initialState = {
  age: 21
};
const reducer = (state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.
  //create a copy
  const newState = { ...state };
  // your action here
  if (action.type === 'AGE_UP') {
    newState.age += action.val;
    newState.loading = false;
  }
  if (action.type === 'AGE_DOWN') {
    newState.age -= action.val;
  }
  if(action.type ==='LOADING') {
    newState.loading = true;
  }

  // end action.
  return newState;
}
export default reducer;
