import React from 'react';
import { render } from '@testing-library/react-native';
import { OfflineBanner } from './OfflineBanner';

jest.mock('@core/hooks/useNetworkStatus', () => ({
  useNetworkStatus: () => false,
}));

describe('OfflineBanner', () => {
  it('renders offline warning when network is disconnected', () => {
    const { getByTestId } = render(<OfflineBanner />);
    expect(getByTestId('offline-banner')).toBeTruthy();
  });
});
