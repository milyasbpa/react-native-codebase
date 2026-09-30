import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/product';

const mockProduct: Product = {
  id: 1,
  title: 'iPhone 15 Pro',
  description: 'Flagship phone',
  price: 999.99,
  discountPercentage: 10,
  rating: 4.8,
  stock: 25,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png',
  images: [],
};

describe('ProductCard', () => {
  it('renders product details and triggers onPress when tapped', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<ProductCard product={mockProduct} onPress={onPressMock} />);

    expect(getByText('iPhone 15 Pro')).toBeTruthy();
    expect(getByText('$999.99')).toBeTruthy();

    fireEvent.press(getByText('iPhone 15 Pro'));
    expect(onPressMock).toHaveBeenCalledWith(mockProduct);
  });
});
