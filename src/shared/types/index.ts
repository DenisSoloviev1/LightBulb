type ValueOf<T> = T[keyof T];

export const RolesDict = {
  ADMIN: "admin",
  USER: "user",
} as const;

export type Roles = ValueOf<typeof RolesDict>;
