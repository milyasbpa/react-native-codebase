import { formatCurrency, truncateText } from './formatters';

describe('formatters', () => {
  describe('formatCurrency', () => {
    it('formats numbers as USD currency strings correctly', () => {
      expect(formatCurrency(19.99)).toBe('$19.99');
    });
  });

  describe('truncateText', () => {
    it('returns original text if shorter than max length', () => {
      expect(truncateText('Hello')).toBe('Hello');
    });

    it('truncates long text and appends ellipsis', () => {
      expect(truncateText('This is a very long string for testing', 10)).toBe('This is a ...');
    });
  });
});
