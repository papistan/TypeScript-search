const search = (state = [], action: object) => {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return [
        ...state,
        {
          location: action.location
        }
      ];
    default:
      return state;
  }
};

export default search;
