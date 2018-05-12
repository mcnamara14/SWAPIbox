import React from 'react';
import DataCleaner from './DataCleaner'
import { shallow } from 'enzyme';

describe('Data cleaner', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        groceries: mockGroceries,
      }),
    }))
  })

  describe('fetc', () => {
    it('should match snapshot', () => {
      expect(DataCleaner).toMatchSnapshot();
    });

    it('should return data based on the filter passed in', async () => {
    
    })
  });
});