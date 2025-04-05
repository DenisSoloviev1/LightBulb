import { VoltageLevel } from "@/entities/calculator";

type ValueOf<T> = T[keyof T];

export const RolesDict = {
  ADMIN: "admin",
  USER: "user",
} as const;

export type Roles = ValueOf<typeof RolesDict>;

export interface ISliderCard {
  number: string;
  text: string;
}

export interface Option {
  id: string;
  value: number | VoltageLevel;
  name: string;
}