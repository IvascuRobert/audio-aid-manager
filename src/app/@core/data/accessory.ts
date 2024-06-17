export enum AccessoryType {
  typeA = "typeA",
  typeB = "typeB",
}
export enum AccessoryStatus {
  free = "free",
  sending = "sending",
  reserved = "reserved",
  trial = "trial",
  sold = "sold",
}
export interface Accessory {
  id: number;
  group: string;
  serialNumber: number;
  name: string;
  brand: string;
  status: AccessoryStatus;
  type: AccessoryType;
  price: number;
  location: string;
  customer: string;
}
