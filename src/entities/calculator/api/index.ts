import { API_URLS } from "@/shared/config/params";
import { ICalc, IResult } from "../model";
import { apiRequest } from "@/shared/config";

/**
 * Рассчет тарифа.
 * @param data - параметры для расчета
 * @return Promise с результатом операции.
 * @throws Ошибку при неудачном запросе
 */

export async function calcRate(data: ICalc): Promise<IResult> {
  try {
    const pesponse = apiRequest<{ result: IResult }>(
      "POST",
      `/calculator/calculate`,
      data
    );

    return (await pesponse).result;
  } catch (error) {
    console.error("Error in calcRate:", error);
    throw error;
  }
}
