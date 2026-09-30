import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductGridSection } from './ProductGridSection';
import { Product } from '../../types/product';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'iPhone 15',
    description: 'Apple phone',
    price: 999,
    discountPercentage: 0,
    rating: 4.8,
    stock: 10,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://example.com/thumb.png',
    images: [],
  },
];

describe('ProductGridSection', () => {
  it('renders product list items', () => {
    const { getByText } = render(
      <ProductGridSection
        products={mockProducts}
        isLoading={false}
        onRefresh={jest.fn()}
        onProductPress={jest.fn()}
      />,
    );

    expect(getByText('iPhone 15')).toBeTruthy();
  });
});
