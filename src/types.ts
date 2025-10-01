export interface IHistoricalDate {
  id: number;
  title: string;
  start: number;
  end: number;
  events: IHistoricalEvent[];
}

export interface IHistoricalEvent {
  id: number;
  year: number;
  description: string;
}
