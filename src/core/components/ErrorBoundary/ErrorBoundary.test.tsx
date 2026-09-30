import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { ErrorBoundary } from './ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Test crash');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Text>Normal Child</Text>
      </ErrorBoundary>,
    );
    expect(getByText('Normal Child')).toBeTruthy();
  });

  it('catches runtime exception and displays fallback UI', () => {
    const { getByTestId, getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );
    expect(getByTestId('error-boundary-fallback')).toBeTruthy();
    expect(getByText('Test crash')).toBeTruthy();
  });
});
