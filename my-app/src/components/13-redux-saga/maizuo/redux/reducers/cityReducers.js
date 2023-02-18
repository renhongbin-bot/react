const cityReducer = (
  oldState = {
    cityName: "北京",
  },
  action
) => {
  const newState = { ...oldState };
  switch (action.type) {
    case "change-city":
      newState.cityName = action.value;
      return newState;
    default:
      return oldState;
  }
};

export default cityReducer