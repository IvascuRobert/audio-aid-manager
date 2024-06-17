export enum DeviceStatus {
  free = "free",
  sending = "sending",
  reserved = "reserved",
  trial = "trial",
  sold = "sold",
}

export enum DeviceAslGroup {
  "type1",
  "type2",
}

export enum DeviceType {
  ITE,
  RITE,
  BTE,
}

export enum DeviceQualityLevel {
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
}

export interface Device {
  id: number;
  group: string;
  brand: string;
  name: string;
  serialNumber: number;
  type: DeviceType;
  battery: string;
  qualityLevel: DeviceQualityLevel;
  color: string;
  aslGroup: DeviceAslGroup;
  status: DeviceStatus;
  price: number;
  location: string;
  customer: string;
}
