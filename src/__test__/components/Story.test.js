import React from 'react';
import { render } from 'enzyme';
import { Story } from '../../components/Story';

const chosenStory = {
  by: 'tgragnato',
  descendants: 3,
  id: 11,
  score: 12,
  time: 1515459435,
  title: 'Economics is overdue for a quantum revolution',
  url:
    'https://aeon.co/essays/has-the-time-come-for-a-quantum-revolution-in-economics',
  chooseStory: jest.fn(),
  showModal: jest.fn(),
  chosen: 11
};
const notChosenStory = { ...chosenStory, id: 12 };

describe('Component: Story', () => {
  it('renders the chosen story correctly', () => {
    const test = render(<Story {...chosenStory} />);
    expect(test).toMatchSnapshot();
  });

  it('renders the regular story correctly', () => {
    const test = render(<Story {...notChosenStory} />);
    expect(test).toMatchSnapshot();
  });
});
