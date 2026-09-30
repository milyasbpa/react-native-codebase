import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import { UserSession } from '../types/auth';

interface AuthState {
  user: UserSession | null;
  token: string | null;
  isAuthenticated: boolean;
  setSession: (session: UserSession) => Promise<void>;
  clearSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setSession: async (session: UserSession) => {
    try {
      await SecureStore.setItemAsync('user_jwt_token', session.token);
    } catch {
      // SecureStore silent fallback
    }
    set({ user: session, token: session.token, isAuthenticated: true });
  },

  clearSession: async () => {
    try {
      await SecureStore.deleteItemAsync('user_jwt_token');
    } catch {
      // SecureStore silent fallback
    }
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
