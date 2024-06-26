export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  nationality: string;
  age: number;
  height: string;
  weight: string;
  seasons: number;
  matches: number;
  goals?: number;
  assists?: number;
  clean_sheets?: number;
  saves?: number;
  info: string;
  photo: string;
  photo_new: string;
}
