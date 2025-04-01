import { IAuth, IUser } from "../model";
import { Roles } from "@/shared/types";
import { apiRequest } from "@/shared/config";

/**
 * Авторизация.
 * @param data - параметры авторизации (логин, пароль).
 * @returns Promise с результатом операции.
 */
export const authUser = async (
  data: IAuth
): Promise<{ token: IUser["token"]; role: Roles }> => {
  try {
    const response = await apiRequest<{ token: IUser["token"]; role: Roles }>(
      "POST",
      "/auth/login",
      "", //пустой токен авторизации
      data
    );

    return response;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    throw new Error("Ошибка авторизации.");
  }
};

/**
 * Запрос для проверки авторизации.
 * @param data - параметры авторизации (логин, пароль).
 * @returns Promise с результатом операции.
 */
export const fetchCurrentUser = async (): Promise<{
  token: IUser["token"];
  role: Roles;
}> => {
  const response = await apiRequest<{ token: IUser["token"]; role: Roles }>(
    "GET",
    "/auth/me"//потом исправить на нормальный
  );
  return response;
};
