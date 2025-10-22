// src/api/product/products.api.ts
import http from "@/utils/http";
import { API_RESOURCES } from "@/utils/api-endpoints";

/* ============ TYPES ============ */
export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface RatingSummary {
  average: number;
  total: number;
  distribution: Record<string, number>;
}

export interface Product {
  categoryName: any;
  gallery: any;
  quantity: number;
  id: string;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  salesCount: number;
  in_stock?: boolean;
  is_active?: boolean;
  category?: Category;
  images?: string[];
  thumbnail?: string;
  ratingSummary?: RatingSummary;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetProductsResponse {
  status: string;
  message?: string;
  data: {
    products: Product[];
    pagination: {
      total: number;
      page: number;
      pages: number;
      limit: number;
    };
  };
}

/* ============ API ============ */

// GET ALL PRODUCTS (Paginated)
export async function getProductsApi(page = 1, limit = 10): Promise<GetProductsResponse> {
  const { data } = await http.get<GetProductsResponse>(
    `${API_RESOURCES.PRODUCTS}?page=${page}&limit=${limit}`
  );
  console.log("Fetched Products:", data);
  return data;
}

// GET SINGLE PRODUCT BY ID
export async function getProductByIdApi(id: string): Promise<{ status: string; data: Product }> {
  const { data } = await http.get<{ status: string; data: Product }>(
    `${API_RESOURCES.PRODUCTS}/${id}`
  );
  return data;
}

// CREATE NEW PRODUCT
export async function createProductApi(payload: Partial<Product>) {
  const { data } = await http.post(`${API_RESOURCES.PRODUCTS}`, payload);
  return data;
}

// UPDATE PRODUCT
export async function updateProductApi(id: string, payload: Partial<Product>) {
  const { data } = await http.patch(`${API_RESOURCES.PRODUCTS}/${id}`, payload);
  return data;
}

// DELETE PRODUCT
export async function deleteProductApi(id: string) {
  const { data } = await http.delete(`${API_RESOURCES.PRODUCTS}/${id}`);
  return data;
}
