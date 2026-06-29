'use server'
import { api } from "@/libs/axios"
import { Banner } from "@/types/banner";

export const getBanners = async (): Promise<Banner[]> => {
  try {
    const response = await api.get("/banners");
    if (response.status === 200) {
      return response.data.banners ?? [];
    }
  } catch (err: any) {
    console.error("Erro ao buscar banners:", err.response?.data || err.message);
  }
  return [];
};

