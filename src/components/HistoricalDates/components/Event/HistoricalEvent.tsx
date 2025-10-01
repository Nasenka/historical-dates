import { IHistoricalEvent } from "../../../../types";
import "./HistoricalEvent.scss";

interface IHistoricalEventProps {
  event: IHistoricalEvent;
}

function HistoricalEvent({ event }: IHistoricalEventProps) {
  return (
    <div className="historical-event" key={event.id}>
      <div className="historical-event__year">{event.year}</div>
      <div className="historical-event__description">{event.description}</div>
    </div>
  );
}

export default HistoricalEvent;
