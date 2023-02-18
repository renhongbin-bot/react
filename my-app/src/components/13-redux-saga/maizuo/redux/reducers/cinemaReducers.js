const cinemaReducer = (
  oldState = {
    list: [],
  },
  action
) => {
  const newState = { ...oldState };
  switch (action.type) {
    case "change-list":
      newState.list = action.value;
      return newState;
    case "change-cinemalist":
      newState.list = action.value;
      return newState;
    default:
      return oldState;
  }
};

export default cinemaReducer;
