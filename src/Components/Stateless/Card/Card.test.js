import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      data: {
        name: "C-3PO", 
        homeworld: "Tatooine", 
        species: "Droid", 
        population: "200000", 
        id: "people1"
      },
      id: 'people1',
      findCard: jest.fn(),
      selected: { card: 'data' },
    }
    wrapper = shallow(<Card {...mockProps} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should add favorite class if a card is selected', () => {
    expect(wrapper.find('.favorite').length).toEqual(1);
  })

  it('should not add favorite class if a card is not selected', () => {
    mockProps = {
      data: {
        name: "C-3PO", 
        homeworld: "Tatooine", 
        species: "Droid", 
        population: "200000", 
        id: "people1"
      },
      id: 'people1',
      findCard: jest.fn(),
      selected: null,
    }

    wrapper = shallow(<Card {...mockProps} />)

    expect(wrapper.find('.favorite').length).toEqual(0);
  })

  it('should call findCard when favoriteIcon is clicked', () => {
    const mockFunction = jest.fn(); 
    const wrapper = shallow(<Card {...mockProps} findCard={mockFunction} />)
    
    wrapper.find('.favoriteIcon').simulate('click');

    expect(mockFunction).toHaveBeenCalled()  
  })
})
