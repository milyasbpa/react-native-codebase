import { apiClient } from '@core/api/client';
import { Product, ProductsResponse, CreateProductDTO, UpdateProductDTO } from '../types/product';

export const fetchProducts = async (
  skip: number = 0,
  limit: number = 10,
): Promise<ProductsResponse> => {
  const response = await apiClient.get<ProductsResponse>(`/products?limit=${limit}&skip=${skip}`);
  return response.data;
};

export const searchProducts = async (query: string): Promise<ProductsResponse> => {
  const response = await apiClient.get<ProductsResponse>(`/products/search?q=${query}`);
  return response.data;
};

export const fetchCategoryList = async (): Promise<string[]> => {
  const response = await apiClient.get<string[]>('/products/category-list');
  return response.data;
};

export const fetchProductsByCategory = async (category: string): Promise<ProductsResponse> => {
  const response = await apiClient.get<ProductsResponse>(`/products/category/${category}`);
  return response.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await apiClient.get<Product>(`/products/${id}`);
  return response.data;
};

export const createProduct = async (data: CreateProductDTO): Promise<Product> => {
  const response = await apiClient.post<Product>('/products/add', data);
  return response.data;
};

export const updateProduct = async (data: UpdateProductDTO): Promise<Product> => {
  const { id, ...payload } = data;
  const response = await apiClient.put<Product>(`/products/${id}`, payload);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<{ id: number; isDeleted: boolean }> => {
  const response = await apiClient.delete<{ id: number; isDeleted: boolean }>(`/products/${id}`);
  return response.data;
};
