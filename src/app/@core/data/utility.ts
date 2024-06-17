export enum UtilityType {
  battery = "battery",
  filter = "filter",
  domes = "domes",
}

export interface Utility {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  type: UtilityType;
  price: number;
  location: string;
}
