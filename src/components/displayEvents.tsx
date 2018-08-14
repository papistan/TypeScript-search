import * as React from "react";

interface IState {
  events: object;
}

class DisplayEvents extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { events };
  }

  createEvents = (events: array) => {
    events.map(event => <Event id={event.id} event={event} />);
  };

  public render() {
    const { events } = this.state;

    return <div>{events && this.createEvents(events)}</div>;
  }
}

export default DisplayEvents;
