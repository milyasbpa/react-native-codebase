import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

interface ProductCartState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
}

export const useProductCartStore = create<ProductCartState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (product: Product) => {
        const { favorites } = get();
        const exists = favorites.some((item) => item.id === product.id);

        if (exists) {
          set({ favorites: favorites.filter((item) => item.id !== product.id) });
        } else {
          set({ favorites: [...favorites, product] });
        }
      },

      isFavorite: (productId: number) => {
        return get().favorites.some((item) => item.id === productId);
      },
    }),
    {
      name: '@product_cart_storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
