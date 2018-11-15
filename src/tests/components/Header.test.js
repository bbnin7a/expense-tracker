import React from 'react'
import { shallow } from 'enzyme'
// import toJSON from 'emzyme-to-json'
import Header from '../../components/Header'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)  
  expect(wrapper).toMatchSnapshot()
  // No need to wrap the toJSON to the wrapper
  // If we have setup the serializer added in Jest configuration file (i.e. jest.config.json)

  // expect(toJSON(wrapper)).toMatchSnapshot()
  // expect(wrapper.find('h1').text()).toBe('Expensify')
})