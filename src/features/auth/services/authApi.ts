import { apiClient } from '@core/api/client';
import { LoginResponse } from '../types/auth';
import { LoginFormValues } from '../components/LoginForm';

export const loginUser = async (credentials: LoginFormValues): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', {
    username: credentials.username,
    password: credentials.password,
    expiresInMins: 60,
  });
  return response.data;
};
