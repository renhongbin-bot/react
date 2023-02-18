import { fromJS } from "immutable";

const cityReducer = (
  oldState = {
    cityName: "北京",
  },
  action
) => {
  const newState = fromJS(oldState);
  switch (action.type) {
    case "change-city":
      // newState.cityName = action.value;
      return newState.set('cityName', action.value).toJS()
    default:
      return oldState;
  }
};

export default cityReducer