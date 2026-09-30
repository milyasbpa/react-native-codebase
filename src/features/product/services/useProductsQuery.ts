import { useQuery } from '@tanstack/react-query';
import { productKeys } from './keys';
import {
  fetchProducts,
  searchProducts,
  fetchProductsByCategory,
  fetchCategoryList,
  fetchProductById,
} from './productApi';

export const useProductsQuery = (category?: string, query?: string) => {
  return useQuery({
    queryKey: productKeys.list({ category, query }),
    queryFn: () => {
      if (query && query.trim().length > 0) {
        return searchProducts(query);
      }
      if (category && category !== 'All') {
        return fetchProductsByCategory(category);
      }
      return fetchProducts(0, 20);
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: fetchCategoryList,
    staleTime: 10 * 60 * 1000,
  });
};

export const useProductDetailQuery = (id: number) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};
