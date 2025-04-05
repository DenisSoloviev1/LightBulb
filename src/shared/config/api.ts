import axios, { AxiosRequestConfig, Method } from "axios";
import { API_URLS } from "./params";

/**
 * Универсальная функция для выполнения HTTP-запросов.
 * @param method - HTTP-метод (GET, POST, PUT, DELETE).
 * @param endpoint - Конечный путь API.
 * @param data - Тело запроса (если нужно).
 * @param params - URL-параметры (опционально).
 * @param token - токен авторизации.
 * @returns Promise с данными ответа от сервера.
 */
export const apiRequest = async <T>(
  method: Method,
  endpoint: string,
  data?: object,
  params?: object,
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${API_URLS.BASE_URL}${endpoint}`, // Полный URL
      data, // Тело запроса
      params, // Если метод GET - параметры в URL
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios(config);
    return response.data; // возвращаем данные из ответа
  } catch (error: any) {
    console.error(
      `Ошибка при запросе ${method} ${endpoint}:`,
      error.response?.data || error.message
    );
    throw error; // выбрасываем ошибку, чтобы ее можно было обработать выше
  }
};