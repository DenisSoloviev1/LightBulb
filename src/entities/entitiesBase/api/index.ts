import { API_URLS } from "@/shared/config/params";
import { IParam } from "../model";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

/**
 * Получение данных.
 * @param param - параметр.
 * @returns Promise с результатом операции.
 */
export async function getData(
  param: string,
): Promise<IParam | null> {
  const apiUrl = `${API_URLS.API_1}?param=${param}&APPID=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
}
