import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi, GetCategoriesResponse } from "@/api/categories/categories.api";

interface UseGetCategoriesParams {
  page?: number;
  limit?: number;
}

export const useGetCategoriesQuery = ({ page = 1, limit = 10 }: UseGetCategoriesParams) => {
  return useQuery<GetCategoriesResponse>({
    queryKey: ["categories", page, limit],
    queryFn: () => getCategoriesApi(page, limit),
    retry: 1,
    staleTime: 5000,
    placeholderData: (prev) => prev,
  });
};
