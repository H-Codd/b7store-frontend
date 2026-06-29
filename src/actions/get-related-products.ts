'use server'

import { api } from "@/libs/axios"
import { Product } from "@/types/product"

export const getRelatedProducts = async (id:number): Promise<Product[]> => {
  try {
    const response = await api.get(`/product/${id}/related`, {
      params: { limit: 4 }
    })
    if (response.status === 200) {
      return response.data?.products ?? []
    }
  } catch (error) {
    console.error("Erro ao buscar produtos relacionados:", error)
  }
  return []
}
