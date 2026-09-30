export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: { category?: string; query?: string; skip?: number; limit?: number }) =>
    [...productKeys.lists(), filters] as const,
  categories: () => [...productKeys.all, 'categories'] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
};
