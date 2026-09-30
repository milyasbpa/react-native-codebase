import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductDeleteDialogSection } from './ProductDeleteDialogSection';
import { Product } from '../../types/product';

const mockProduct: Product = {
  id: 1,
  title: 'iPhone 15',
  description: 'Phone',
  price: 999,
  discountPercentage: 0,
  rating: 4.8,
  stock: 10,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: '',
  images: [],
};

describe('ProductDeleteDialogSection', () => {
  it('renders confirmation dialog and triggers confirm callback', () => {
    const onConfirmMock = jest.fn();
    const { getByTestId, getByText } = render(
      <ProductDeleteDialogSection
        product={mockProduct}
        visible={true}
        onCancel={jest.fn()}
        onConfirm={onConfirmMock}
      />,
    );

    expect(getByText('iPhone 15')).toBeTruthy();
    fireEvent.press(getByTestId('confirm-delete-button'));
    expect(onConfirmMock).toHaveBeenCalledWith(mockProduct);
  });
});
