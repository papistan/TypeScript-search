import * as React from "react";

interface IProps {
    events?: Object
}

const Events: React.SFC<IProps> = (props: IProps) => {

  createEvents = (events: array) => {
    events.map(event => <Event id={event.id} event={event} />);
  };

  public render() {
    const { events } = props;

    return <div>{events && createEvents(events)}</div>;
  }
}

export default DisplayEvents;