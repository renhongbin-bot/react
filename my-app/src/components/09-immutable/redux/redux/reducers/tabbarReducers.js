import { fromJS } from "immutable";

const tabbarRreducer = (
  oldState = fromJS({
    show: true,
  }),
  action
) => {
  switch (action.type) {
    case "hide-tabbar":
      return oldState.set("show", false);
    case "show-tabbar":
      return oldState.set("show", true);
    default:
      return oldState;
  }
};

export default tabbarRreducer;
