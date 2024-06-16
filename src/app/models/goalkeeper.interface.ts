export interface Player {
  name: string;
  position: string;
  number: number;
  nationality: string;
  age: number;
  height: string;
  weight: string;
  seasons: number;
  matches: number;
  info: string;
  photo: string;
  goals?: number;
  assists?: number;
  clean_sheets?: number;
  saves?: number;
}
