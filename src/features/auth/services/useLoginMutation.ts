import { useMutation } from '@tanstack/react-query';
import { loginUser } from './authApi';
import { useAuthStore } from '../store/useAuthStore';
import { LoginFormValues } from '../components/LoginForm';

export const useLoginMutation = () => {
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (credentials: LoginFormValues) => loginUser(credentials),
    onSuccess: async (data) => {
      await setSession(data);
    },
  });
};
