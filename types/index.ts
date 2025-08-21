export type NavItem = {
  name: string;
  path: string;
  icon: string;
  showOnPaths: string[];
}

export type Color = {
  name: string;  
  color: string;
  price: number;
}

export type Motive = {
  name: string;
  img: string;
  price: number;
}

export type PersonalData = {
  name: string;
  address: string;
}

export enum PartOfTshirt {
  Tshirt = 'tshirt',
  NeckLining = 'neckLining',
  WavePatterns = 'wavePatterns'
}