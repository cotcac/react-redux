const initialState = {
    age: 21
};
const reducer =(state = initialState, action) => {
  // take the state and base on the action we will change the stage and return.
  //create a copy
  const newState = {...state};
  // your action here
  if(action.type ==='AGE_UP_ASYNC'){
      newState.age+= action.val;
  }
  if(action.type ==='AGE_DOWN'){
    newState.age-= action.val;
}

  // end action.
  return newState;
}
export default reducer;
