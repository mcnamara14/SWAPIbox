import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from '../../Stateless/Header/Header';
import CardContainer from '../../Stateful/CardContainer/CardContainer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should render a Header component', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('should render a CardContainer component', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });
})

