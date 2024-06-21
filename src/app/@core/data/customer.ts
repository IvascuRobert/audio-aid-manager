export enum CustomerStatus {
  no = "no",
  pc = "pc",
  cc = "cc",
  cl = "cl",
}
export enum CustomerContactNoteType {
  member_get_member = "member_get_member",
  social = "social",
  doctor = "doctor",
  commercial = "commercial",
}
export enum ProcessStatusType {
  open = "open",
  trial = "trial",
  win = "win",
  lost = "lost",
  end = "end",
}
export enum Gender {
  male = "male",
  female = "female",
  unknown = "transgender",
}
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: Date;
  telephone: string;
  status: CustomerStatus;
  address: string;
  doctor: string;
  clinic: string;
  contactNote: CustomerContactNoteType;
  processStatus: ProcessStatusType;
  location: string;
  appointment: Date;
  gender: Gender;
}
