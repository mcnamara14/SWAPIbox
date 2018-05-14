import React from 'react';
import AddFavorites from './AddFavorites';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddFavorites />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
