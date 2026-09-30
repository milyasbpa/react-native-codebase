import { apiClient } from './client';

describe('apiClient', () => {
  it('has default baseURL configured to DummyJSON', () => {
    expect(apiClient.defaults.baseURL).toBe('https://dummyjson.com');
  });

  it('has timeout set to 10 seconds', () => {
    expect(apiClient.defaults.timeout).toBe(10000);
  });
});
