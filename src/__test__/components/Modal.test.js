import React from 'react';
import { render } from 'enzyme';
import { Modal } from '../../components/Modal';

const mockHandler = jest.fn();

describe('Component: Modal', () => {
  it('renders the hidden modal', () => {
    const test = render(<Modal href={false} hideModal={mockHandler} />);
    expect(test).toMatchSnapshot();
  });

  it('renders the showing modal', () => {
    const test = render(
      <Modal href="http://7thguard.net" hideModal={mockHandler} />
    );
    expect(test).toMatchSnapshot();
  });
});
