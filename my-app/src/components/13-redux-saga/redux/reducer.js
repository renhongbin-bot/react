function reducer(oldState = { list: [], list2: [] }, action = {}) {
  const newState = { ...oldState };
  switch (action.type) {
    case "change-list1":
      console.log(action);
      newState.list = action.payload;
      return newState;
    case "change-list2":
      console.log(action);
      newState.list2 = action.payload;
      return newState;
    default:
      return oldState;
  }
}

export default reducer;
