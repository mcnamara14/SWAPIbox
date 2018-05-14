import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});
