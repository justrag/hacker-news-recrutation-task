import { chooseStory } from './actions';
import { chosenStory } from './reducer';

describe('chosenStory reducer', () => {
	it('initiates correctly', () => {
		expect(chosenStory(undefined, {})).toEqual(false);
	});

	it('changes on CHOOSE_STORY', () => {
		expect(chosenStory(undefined, chooseStory(17))).toEqual(17);
	});
});
