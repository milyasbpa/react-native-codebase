import React from 'react';
import { renderWithProviders } from '@core/utils/test-utils';
import { ProductListContainer } from './ProductListContainer';

describe('ProductListContainer', () => {
  it('renders product catalog screen correctly', () => {
    const { getByPlaceholderText } = renderWithProviders(<ProductListContainer />);
    expect(getByPlaceholderText('Search products by keyword...')).toBeTruthy();
  });
});
