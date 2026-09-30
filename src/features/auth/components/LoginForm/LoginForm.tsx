import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@core/components/Input';
import { Button } from '@core/components/Button';
import { styles } from './LoginForm.styles';

export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  isLoading?: boolean;
  usernameLabel?: string;
  usernamePlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  submitButtonText?: string;
}

export const LoginForm: React.FC<LoginFormProps> = React.memo(
  ({
    onSubmit,
    isLoading = false,
    usernameLabel = 'Username',
    usernamePlaceholder = 'Enter username',
    passwordLabel = 'Password',
    passwordPlaceholder = 'Enter password',
    submitButtonText = 'Sign In',
  }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginFormValues>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        username: 'kminchelle',
        password: '0lel25M',
      },
    });

    return (
      <View style={styles.container}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <Input
              label={usernameLabel}
              placeholder={usernamePlaceholder}
              value={value}
              onChangeText={onChange}
              error={errors.username?.message}
              autoCapitalize="none"
              testID="username-input"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label={passwordLabel}
              placeholder={passwordPlaceholder}
              value={value}
              onChangeText={onChange}
              secureTextEntry
              error={errors.password?.message}
              autoCapitalize="none"
              testID="password-input"
            />
          )}
        />

        <Button
          label={submitButtonText}
          onPress={handleSubmit((values) => onSubmit(values))}
          isLoading={isLoading}
          style={styles.button}
          testID="login-submit-button"
        />
      </View>
    );
  },
);

LoginForm.displayName = 'LoginForm';
