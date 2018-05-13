import React from 'react';
import ReactDOM from 'react-dom';
import ScrollingText from './ScrollingText';
import { shallow } from 'enzyme';
import { mockDirtyFilmsData } from '../../../DataCleaner/mockData';

describe('ScrollingText', () => {
  beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
        json: () => Promise.resolve(
          mockDirtyFilmsData
      )
    }))
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<ScrollingText />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  // describe('componentDidMount', async () => {
  //   const wrapper = shallow(<ScrollingText />);
  //   it('should call returnRandomCrawl after fetch', () => {
  //     wrapper.instance().returnRandomCrawl = jest.fn();
  //     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //       status: 200,
  //       json: () => Promise.resolve(
  //         wrapper.instance().returnRandomCrawl
  //       )
  //     })
  //   )
  //     expect(wrapper.instance().returnRandomCrawl).toHaveBeenCalled();
  //   })
  // })

  describe('returnRandomCrawl', () => {
    it('should set state to random crawl data', () => {
      const wrapper = shallow(<ScrollingText />, { disableLifecycleMethods: true });
      const films = mockDirtyFilmsData;
      const expectedCrawl = films[0].opening_crawl;
      const expectedTitle = films[0].title;
      const expectedDate = films[0].release_date;

      wrapper.instance().returnRandomCrawl(films);

      expect(wrapper.state().crawl).toEqual(expectedCrawl)
      expect(wrapper.state().title).toEqual(expectedTitle)
      expect(wrapper.state().date).toEqual(expectedDate)
    })
  })

  
})