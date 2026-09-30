import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from './Input';

describe('Input', () => {
  it('renders label and handles text change', () => {
    const onChangeTextMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Input label="Email" placeholder="Enter email" onChangeText={onChangeTextMock} />,
    );

    expect(getByText('Email')).toBeTruthy();
    fireEvent.changeText(getByPlaceholderText('Enter email'), 'test@example.com');
    expect(onChangeTextMock).toHaveBeenCalledWith('test@example.com');
  });

  it('renders error message when error prop is provided', () => {
    const { getByText } = render(<Input label="Password" error="Password is required" />);
    expect(getByText('Password is required')).toBeTruthy();
  });
});
