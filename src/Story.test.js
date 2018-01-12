import React from 'react';
import { Story } from './Story';
import renderer from 'react-test-renderer';
//import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const noop = () => {};

const story = {
	by: 'tgragnato',
	descendants: 3,
	id: 16102508,
	score: 12,
	time: 1515459435,
	title: 'Economics is overdue for a quantum revolution',
	url:
		'https://aeon.co/essays/has-the-time-come-for-a-quantum-revolution-in-economics',
	chooseStory: noop,
	showModal: noop,
	chosen: 11
};

it('renders correctly', () => {
	const tree = renderer.create(<Story {...story} />).toJSON();
	expect(tree).toMatchSnapshot();
});

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Story } from './Story';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: Story', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(<Story />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
*/
