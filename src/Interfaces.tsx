export enum LyricNavEnum {
  First = 'erstes Gedicht',
  Bus = 'Busgedicht',
  Wait = 'Warten',
  Pause = 'Pause',
  Untenrum = 'Untenrum'
}

export enum MonthNavEnum {
  January = 'Januar',
  February = 'Februar',
  March = 'März',
  April = 'April'
}

export interface Get2KnowData {
  header: string;
  data: string[];
  date: Date;
}
