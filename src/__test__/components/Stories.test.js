import React from 'react';
import { shallow } from 'enzyme';
import { Stories } from '../../components/Stories';

const stories = [
  { id: 42, title: 'The answer' },
  { id: 44, title: 'Old heroes in his blood' }
];

describe('Component: Stories', () => {
  it('renders correctly', () => {
    const test = shallow(<Stories stories={stories} />);
    expect(test).toMatchSnapshot();
  });
});
