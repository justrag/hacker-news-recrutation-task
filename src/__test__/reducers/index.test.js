import reducer from '../../reducers/';

describe('root reducer', () => {
  it('initiates correctly and contains all the subreducers', () => {
    expect(reducer(undefined, {})).toEqual(
      expect.objectContaining({
        apiError: expect.anything(),
        list: expect.anything(),
        stories: expect.anything(),
        modalHref: expect.anything(),
        chosenStory: expect.anything()
      })
    );
  });
});
