import { API_URLS } from "@/shared/config/params";
import { ICalc } from "../model";
import { apiRequest } from "@/shared/config";

/**
 * Рассчет тарифа.
 * @param data - параметры для расчета
 * @return Promise с результатом операции.
 * @throws Ошибку при неудачном запросе
 */

export async function calcRate(data: ICalc): Promise<{
  cost3CK: number;
  cost4CK: number;
}> {
  try {
    const pesponse = apiRequest<{
      cost3CK: number;
      cost4CK: number;
    }>("POST", `${API_URLS.BASE_URL}/calculator/calculate`, data);

    return pesponse;
  } catch (error) {
    console.error("Error in calcRate:", error);
    throw error;
  }
}
