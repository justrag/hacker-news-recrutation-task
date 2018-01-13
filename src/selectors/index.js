import { createSelector } from 'reselect';

export const getChosenStory = state => state.chosenStory;
export const getModalHref = state => state.modalHref;
export const getAPIError = state => state.apiError;
export const getList = state => state.list;
export const getStories = state => state.stories;

export const getStoriesArr = createSelector(
  getList,
  getStories,
  (list, stories) => list.map(id => stories[id])
);

export const getLoaded = createSelector(
  getList,
  getStories,
  (list, stories) => list.length && list.every(id => stories[id])
);

export const getLoadingProgress = createSelector(
  getList,
  getStories,
  (list, stories) => {
    const max = list.length;
    const loaded = list.reduce((count, id) => count + (stories[id] ? 1 : 0), 0);
    return Math.floor(loaded / max * 100);
  }
);
