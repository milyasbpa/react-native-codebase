import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';
import { styles } from './ErrorBoundary.styles';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <View testID="error-boundary-fallback" style={styles.container}>
          <Text style={styles.title}>{this.props.fallbackTitle || 'Something went wrong'}</Text>
          <Text style={styles.subtitle}>
            {this.state.error?.message || 'An unexpected runtime error occurred.'}
          </Text>
          <Button label="Try Again" onPress={this.handleReset} variant="outline" style={styles.button} />
        </View>
      );
    }

    return this.props.children;
  }
}
