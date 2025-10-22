import http from "@/utils/http";
import { API_RESOURCES } from "@/utils/api-endpoints";

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  is_active?: boolean;
  parentCategory?: {
    _id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface GetSubCategoriesResponse {
  status: string;
  message?: string;
  data: {
    subCategories: SubCategory[];
    pagination: {
      total: number;
      page: number;
      pages: number;
      limit: number;
    };
  };
}

export async function getSubCategoriesApi(
  page = 1,
  limit = 10
): Promise<GetSubCategoriesResponse> {
  const { data } = await http.get<GetSubCategoriesResponse>(
    `${API_RESOURCES.SUBCATEGORIES}?page=${page}&limit=${limit}`
  );

  console.log("SUBCATEGORIES data", data);
  return data;
}
