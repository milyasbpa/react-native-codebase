import React from 'react';
import { render } from '@testing-library/react-native';
import { RatingBadge } from './RatingBadge';

describe('RatingBadge', () => {
  it('renders rating formatted to 1 decimal place', () => {
    const { getByText } = render(<RatingBadge rating={4.56} />);
    expect(getByText('4.6')).toBeTruthy();
  });
});
