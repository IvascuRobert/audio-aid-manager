import { Gender } from "./customer";
import { Role } from "./role";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  gender: Gender;
}
