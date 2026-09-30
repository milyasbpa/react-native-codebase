import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductFormModalSection } from './ProductFormModalSection';

describe('ProductFormModalSection', () => {
  it('renders modal when visible is true', () => {
    const { getByTestId } = render(
      <ProductFormModalSection visible={true} onClose={jest.fn()} onSubmit={jest.fn()} />,
    );

    expect(getByTestId('product-form-modal')).toBeTruthy();
  });
});
