import * as constants from "../constants";

// export interface ChangeLocation {
//   type: constants.CHANGE_LOCATION;
// }

export function changeLocation(location: string) {
  return {
    type: constants.CHANGE_LOCATION,
    location
  };
}
