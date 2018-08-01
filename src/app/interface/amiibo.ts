export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: { // type obj; interface: comma gives error?
    au: string;
    eu: string;
    jp: string;
    na: string;
  };
  tail: string;
  type: string;
}

