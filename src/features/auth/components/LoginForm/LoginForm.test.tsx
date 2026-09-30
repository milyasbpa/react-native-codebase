import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders input fields and triggers submit with values', async () => {
    const onSubmitMock = jest.fn();
    const { getByTestId } = render(<LoginForm onSubmit={onSubmitMock} />);

    fireEvent.changeText(getByTestId('username-input'), 'admin');
    fireEvent.changeText(getByTestId('password-input'), 'secret');
    fireEvent.press(getByTestId('login-submit-button'));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        username: 'admin',
        password: 'secret',
      });
    });
  });
});
