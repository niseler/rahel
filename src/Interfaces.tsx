// noinspection JSUnusedGlobalSymbols
export enum LyricNavEnum {
  First = 'erstes Gedicht',
  Bus = 'Busgedicht',
  Wait = 'Warten',
  Pause = 'Pause',
  Untenrum = 'Untenrum',
  Miss = 'Vermissen',
  Christmas = 'Weihnachten',
}

export enum MonthNavEnum {
  January = 'Januar',
  February = 'Februar',
  March = 'März',
  April = 'April',
  May = 'Mai'
}


export interface Get2KnowData {
  header: string;
  data: string[];
  date: Date;
}
