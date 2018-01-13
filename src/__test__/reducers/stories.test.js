import { getStorySuccess } from '../../actions/';
import stories from '../../reducers/stories';

const atosStory = { id: 'atos', title: 'Atos' };
const porthosStory = { id: 'porthos', title: 'Porthos' };
const aramisStory = { id: 'aramis', title: 'Aramis' };
const dartagnanStory = { id: 'dartagnan', title: "d'Artagnan" };
const threeStories = {
  atos: atosStory,
  porthos: porthosStory,
  aramis: aramisStory
};
const fourStories = {
  atos: atosStory,
  porthos: porthosStory,
  aramis: aramisStory,
  dartagnan: dartagnanStory
};

describe('stories reducer', () => {
  it('initiates correctly', () => {
    expect(stories(undefined, {})).toEqual({});
  });

  it('changes on GET_STORY_SUCCESS', () => {
    expect(stories(threeStories, getStorySuccess(dartagnanStory))).toEqual(
      fourStories
    );
  });

  it('ignores some other action', () => {
    expect(stories(threeStories, { type: 'SOME_OTHER_ACTION' })).toEqual(
      threeStories
    );
  });
});
