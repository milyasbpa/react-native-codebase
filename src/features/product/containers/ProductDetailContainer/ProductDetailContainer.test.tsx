import React from 'react';
import { renderWithProviders } from '@core/utils/test-utils';
import { ProductDetailContainer } from './ProductDetailContainer';

describe('ProductDetailContainer', () => {
  it('renders product detail container', () => {
    const { getByTestId } = renderWithProviders(<ProductDetailContainer productId={1} />);
    expect(getByTestId('product-detail-loading')).toBeTruthy();
  });
});
