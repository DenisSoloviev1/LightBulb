import { Roles } from "@/shared/types";

export interface IUser {
  token: string;
  role: Roles;
  userName?: string;
}

export interface IAuth {
  email: string;
  password: string;
}
