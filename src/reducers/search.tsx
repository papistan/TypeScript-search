import { CHANGE_LOCATION, REQUEST_EVENTS, RECEIVE_EVENTS } from "../constants";

export const changeLocation = (state = "oakland", action: object) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.location;
    default:
      return state;
  }
};

const events = (
  state = {
    events: []
  },
  action: object
) => {
  switch (action.type) {
    case REQUEST_EVENTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_EVENTS:
      return {
        ...state,
        isFetching: false,
        events: action.events
      };
    default:
      return state;
  }
};
