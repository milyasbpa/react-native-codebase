import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<Button label="Submit" onPress={jest.fn()} />);
    expect(getByText('Submit')).toBeTruthy();
  });

  it('triggers onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button label="Click Me" onPress={onPressMock} />);
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button label="Disabled" onPress={onPressMock} disabled />);
    fireEvent.press(getByText('Disabled'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
