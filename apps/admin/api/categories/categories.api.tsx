// src/api/categories/categories.api.ts
import http from "@/utils/http";
import { API_RESOURCES } from "@/utils/api-endpoints";

export interface Category {
    createdBy: any;
    children: never[];
    type: string;
    _id: string;
    name: string;
    slug: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface GetCategoriesResponse {
    status: string;
    message?: string;
    data: {
        categories: Category[];
        pagination: {
            total: number;
            page: number;
            pages: number;
            limit: number;
        };
    };
}

export async function getCategoriesApi(
    page = 1,
    limit = 10
): Promise<GetCategoriesResponse> {
    const { data } = await http.get<GetCategoriesResponse>(
        `${API_RESOURCES.CATEGORIES}?page=${page}&limit=${limit}`
    );
    console.log("CATEGORIES data", data);
    return data;
}
