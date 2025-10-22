import { useQuery } from "@tanstack/react-query";
import {
  getSubCategoriesApi,
  GetSubCategoriesResponse,
} from "@/api/subcategories/subcategories.api";

interface UseGetSubCategoriesParams {
  page?: number;
  limit?: number;
}

export const useGetSubCategoriesQuery = ({
  page = 1,
  limit = 10,
}: UseGetSubCategoriesParams) => {
  return useQuery<GetSubCategoriesResponse>({
    queryKey: ["subcategories", page, limit],
    queryFn: () => getSubCategoriesApi(page, limit),
    retry: 1,
    staleTime: 5000,
    placeholderData: (prev) => prev,
  });
};
