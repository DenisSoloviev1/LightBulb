import { API_URLS } from "@/shared/config/params";
import { ICalc } from "../model";

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
    const response = await fetch(`${API_URLS.BASE_URL}/calculator/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData.result);
    return responseData.result; // Возвращаем только result
  } catch (error) {
    console.error("Error in calcRate:", error);
    throw error;
  }
}
