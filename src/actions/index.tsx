import * as constants from "../constants";

// export interface ChangeLocation {
//   type: constants.CHANGE_LOCATION;
// }

export const changeLocation = (location: string) => ({
  type: constants.CHANGE_LOCATION,
  location
});

export const requestEvents = (location: string) => ({
  type: constants.REQUEST_EVENTS,
  location
});

export const receiveEvents = (location: string, json) => ({
  type: constants.RECEIVE_EVENTS,
  location,
  events: json.data.children.map(child => child.data)
});

const fetchEvents = (location: string) => dispatch => {
  dispatch(requestPosts(subreddit));
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)));
};
