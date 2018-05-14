import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import { shallow } from 'enzyme';

describe('Buttons', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<Buttons favoriteCount={ 1 } setData={ jest.fn() } toggleDisplayFavorites={ jest.fn() } />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleClick', () => {

    it('should call toggleDisplayFavorites if favoriteCount is more than 0', () => {
      wrapper.instance().handleClick();

      expect(wrapper.instance().props.toggleDisplayFavorites).toHaveBeenCalled();
    })

    it('should not call toggleDisplayFavorites if favoriteCount is 0', () => {
      wrapper = shallow(<Buttons favoriteCount={ 0 } toggleDisplayFavorites={ jest.fn() }/>);

      wrapper.instance().handleClick();

      expect(wrapper.instance().props.toggleDisplayFavorites).not.toHaveBeenCalled();
    })
  })

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Buttons setData={ jest.fn() } toggleDisplayFavorites={ jest.fn() } />);
    })

    it('should call handleClick when favorites is clicked', () => {
      wrapper.instance().handleClick = jest.fn();
      wrapper.find('.favorites').simulate('click');
  
      expect(wrapper.instance().handleClick).toHaveBeenCalled();
    });

    it('should call setData when people is clicked', () => {
      wrapper.find('.people').simulate('click');
  
      expect(wrapper.instance().props.setData).toHaveBeenCalled();
    });

    it('should call setData when planets is clicked', () => {
      wrapper.find('.planets').simulate('click');
  
      expect(wrapper.instance().props.setData).toHaveBeenCalled();
    });

    it('should call setData when vehicles is clicked', () => {
      wrapper.find('.vehicles').simulate('click');
  
      expect(wrapper.instance().props.setData).toHaveBeenCalled();
    });
  })
})

