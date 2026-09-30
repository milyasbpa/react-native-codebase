import React from 'react';
import { renderWithProviders } from '@core/utils/test-utils';
import { ProfileContainer } from './ProfileContainer';

describe('ProfileContainer', () => {
  it('renders profile container screen correctly', () => {
    const { getByTestId } = renderWithProviders(<ProfileContainer />);
    expect(getByTestId('logout-button')).toBeTruthy();
  });
});
