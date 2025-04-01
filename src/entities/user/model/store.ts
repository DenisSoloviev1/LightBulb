"use client"

import { Roles, RolesDict } from "@/shared/types";
import { create } from "zustand";
import { fetchCurrentUser } from "../api";

interface IAuthStore {
  isAuth: boolean;
  token: string;
  role: Roles;
  setAuth: (token: string, role: Roles) => void;
  resetAuth: () => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuth: false,
  token: "",
  role: RolesDict.USER,

  setAuth: (token, role) =>
    set({
      isAuth: true,
      token,
      role,
    }),

  resetAuth: () =>
    set({
      isAuth: false,
      token: "",
      role: RolesDict.USER,
    }),

  initialize: async () => {
    try {
      const { token, role } = await fetchCurrentUser();
      set({
        isAuth: true,
        token,
        role,
      });
    } catch {
      set({
        isAuth: false,
        token: "",
        role: RolesDict.USER,
      });
    }
  },
}));
