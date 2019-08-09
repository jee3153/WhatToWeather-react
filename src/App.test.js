import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

beforeAll(() => {
  global.fetch = jest.fn();

});

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});

it('must render a loading spin before api call success', () => {
  expect(wrapper.find('img.loader-icon').exists()).toBeTruthy();
});

it("must show the other components and hide the loading span after api call success",
  (done) => {
    const spyDidMount = jest.spyOn(App.prototype, "componentDidMount");

    fetch.mockImplementation(() => {
      return Promise.resolve({

        json: () => {
          return Promise.resolve({
            items: "manas",
            temperature: '23',
            summary: 'dud',
            icon: 'rain',
            location: 'london',
            hourly: '11',
            daily: '26',

          });
        }
      });
    });

    const didMount = wrapper.instance().componentDidMount();
    // expecting componentDidMount have been called
    expect(spyDidMount).toHaveBeenCalled();
    didMount.then(() => {
      // updating the wrapper
      wrapper.update();
      expect(wrapper.find("div.content"));
      expect(wrapper.find("img.loader-icon").length).toBe(0);
      spyDidMount.mockRestore();
      fetch.mockClear();
      done();
    });
  });