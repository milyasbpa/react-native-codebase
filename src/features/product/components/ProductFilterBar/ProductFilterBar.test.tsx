import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductFilterBar } from './ProductFilterBar';

describe('ProductFilterBar', () => {
  it('renders category chips and triggers category selection', () => {
    const onSelectCategoryMock = jest.fn();
    const { getByText } = render(
      <ProductFilterBar
        categories={['smartphones', 'laptops']}
        selectedCategory="All"
        onSelectCategory={onSelectCategoryMock}
      />,
    );

    expect(getByText('All')).toBeTruthy();
    expect(getByText('smartphones')).toBeTruthy();

    fireEvent.press(getByText('smartphones'));
    expect(onSelectCategoryMock).toHaveBeenCalledWith('smartphones');
  });
});
