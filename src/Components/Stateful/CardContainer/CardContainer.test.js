import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import ScrollingText from '../ScrollingText/ScrollingText';
import Loading from '../../Stateless/Loading/Loading';
import { shallow, renderer } from 'enzyme';
import DataCleaner from '../../../DataCleaner/DataCleaner';
import { mockCleanedPeopleData } from '../../../DataCleaner/mockData';
jest.mock('../../../DataCleaner/DataCleaner', () => {
  return jest.fn().mockImplementation(() => {
    return {
      fetchData: jest.fn().mockImplementation(() => Promise.resolve({
        homeworld: "Tatooine",
        id: "people0",
        name: "Luke Skywalker",
        population: "200000",
        species: "Human"
      }))
    };
  });
});

describe('CardContainer', () => {
  let wrapper; 
  let dataCleaner;

  beforeEach((() => {
    wrapper = shallow(<CardContainer />)
  }))

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  describe('setData', () => {
    it('should call fetchData with correct argument', async () => {
      const filter = 'people';

      await wrapper.instance().setData(filter)

      expect(wrapper.instance().dataCleaner.fetchData).toHaveBeenCalledWith(filter)
    })
  })

  describe('findCard', () => {
    it('should call removeFavorite if a card is in favorites array already with selected card', () => {
      const id = 'vehicles0';
      const expected = { id: "vehicles0" };

      wrapper.setState({ 
        data: [{ id: "vehicles0" }],
        favorites: [{ id: "vehicles0" },{ id: "vehicles1"}]
      });

      wrapper.instance().removeFavorite =  jest.fn()
      wrapper.instance().findCard(id);

      expect(wrapper.instance().removeFavorite).toHaveBeenCalledWith(expected);
    })

    it('should call addFavorite if a card is in favorites array already with selected card', () => {
      const id = 'vehicles0';
      const expected = { id: "vehicles0" };

      wrapper.setState({ 
        data: [{ id: "vehicles0" }],
        favorites: [{ id: "vehicles1" },{ id: "vehicles2"}]
      });
      
      wrapper.instance().addFavorite =  jest.fn()
      wrapper.instance().findCard(id);

      expect(wrapper.instance().addFavorite).toHaveBeenCalledWith(expected);
    })
  })

  describe('removeFavorite', () => {
    it('should remove selected card from favorites array', () => {
      const mockSelectedCard = { id: "vehicles1" }
      const expected = [{ id: "vehicles2" }]

      wrapper.setState({ 
        favorites: [{ id: "vehicles1" },{ id: "vehicles2" }]
      });

      wrapper.instance().removeFavorite(mockSelectedCard);

      expect(wrapper.state().favorites).toEqual(expected)
    })

    it('should reduce favorite count by one when called', () =>{
      const mockSelectedCard = { id: "vehicles1" }

      wrapper.setState({ favoriteCount: 2 });

      wrapper.instance().removeFavorite(mockSelectedCard);

      expect(wrapper.state().favoriteCount).toEqual(1)
    })
  })

  describe('addFavorite', () => {
    it('should add selected card to favorites array', () => {
      const mockSelectedCard = { id: "vehicles2" }
      const expected = [{ id: "vehicles1" },{ id: "vehicles2" } ]

      wrapper.setState({ 
        favorites: [{ id: "vehicles1" }]
      });

      wrapper.instance().addFavorite(mockSelectedCard)

      expect(wrapper.state().favorites).toEqual(expected)
    })

    it('should add one to favorite count when called', () =>{
      const mockSelectedCard = { id: "vehicles1" }

      wrapper.setState({ favoriteCount: 1 });

      wrapper.instance().addFavorite(mockSelectedCard);

      expect(wrapper.state().favoriteCount).toEqual(2)
    })
  })

  describe('toggleAddFavorites', () => {
    it('should set render state to addFavorites when called', () => {
      const expected = 'addFavorites';

      wrapper.instance().toggleAddFavorites();
 
      expect(wrapper.state().renderState).toEqual(expected)
    })
  })


  describe('addFavorite', () => {
    it('should set data to favorites array when called', () => {
      const expected = [{ id: "vehicles1" }]

      wrapper.setState({ 
        data: [mockCleanedPeopleData],
        favorites: [{ id: "vehicles1" }]
      });

      wrapper.instance().toggleDisplayFavorites();

      expect(wrapper.state().data).toEqual(expected)
    })
  })

  describe('toggleRender', () => {
    it('should render scrolling text component to page when render state is crawl', () => {
      wrapper.setState({ 
        renderState: 'crawl'
      });

      wrapper.instance().toggleRender()

      expect(wrapper.find('ScrollingText').length).toEqual(1);
    })

    it.skip('should call getCards function when render state is cards', () => {
      wrapper.setState({ 
        renderState: 'cards'
      });

      wrapper.instance().getCards = jest.fn();
      wrapper.instance().toggleRender()

      expect(wrapper.instance().getCards).toHaveBeenCalled();
    })

    it('should render the Loading component when render state is loading', () => {
      wrapper.setState({ 
        renderState: 'loading'
      });

      wrapper.instance().toggleRender()

      expect(wrapper.find('Loading').length).toEqual(1);
    })
  })

})


