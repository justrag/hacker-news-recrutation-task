import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../components/App';

describe('Component: App', () => {
  it('renders correctly', () => {
    const test = shallow(<App />);
    expect(test).toMatchSnapshot();
  });
});
