import { chooseStory } from '../../actions/';
import chosenStory from '../../reducers/chosenStory';

const storyId = 42;

describe('chosenStory reducer', () => {
  it('initiates correctly', () => {
    expect(chosenStory(undefined, {})).toEqual(false);
  });

  it('changes on CHOOSE_STORY', () => {
    expect(chosenStory(undefined, chooseStory(storyId))).toEqual(storyId);
  });

  it('does not change on other action type', () => {
    expect(chosenStory(storyId, { type: 'SOME_OTHER_ACTION' })).toEqual(
      storyId
    );
  });
});
