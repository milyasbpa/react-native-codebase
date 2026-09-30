import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingSkeleton } from './LoadingSkeleton';

describe('LoadingSkeleton', () => {
  it('renders correctly with given testID', () => {
    const { getByTestId } = render(<LoadingSkeleton testID="custom-skeleton" />);
    expect(getByTestId('custom-skeleton')).toBeTruthy();
  });
});
