const tabbarRreducer = (
  oldState = {
    show: true,
  },
  action
) => {
  const newState = { ...oldState };
  switch (action.type) {
    case "hide-tabbar":
      newState.show = false;
      return newState;
    case "show-tabbar":
      newState.show = true;
      return newState;
    default:
      return oldState;
  }
};

export default tabbarRreducer;
