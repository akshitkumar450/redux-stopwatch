const initialState = {
  timer: 0,
  start: false,
  laps: [],
  isClicked: false,
  running: false,
};

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        start: true,
        running: true,
        isClicked: true,
      };
    case "PAUSE":
      return {
        ...state,
        start: false,
        running: false,
      };
    case "RESUME":
      return {
        ...state,
        start: true,
        running: true,
      };
    case "LAPS":
      return {
        ...state,
        laps: [...state.laps, state.timer],
      };
    case "SECONDS":
      return {
        ...state,
        timer: state.timer + 10,
      };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

export default timeReducer;
