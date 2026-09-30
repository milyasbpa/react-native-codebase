import React from 'react';
import { render } from '@testing-library/react-native';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders toast message correctly', () => {
    const { getByText } = render(<Toast message="Item added to cart" type="success" />);
    expect(getByText('Item added to cart')).toBeTruthy();
  });
});
