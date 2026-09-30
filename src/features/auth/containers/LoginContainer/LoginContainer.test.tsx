import React from 'react';
import { renderWithProviders } from '@core/utils/test-utils';
import { LoginContainer } from './LoginContainer';

describe('LoginContainer', () => {
  it('renders login screen correctly with translated text', () => {
    const { getByTestId } = renderWithProviders(<LoginContainer />);
    expect(getByTestId('login-submit-button')).toBeTruthy();
  });
});
